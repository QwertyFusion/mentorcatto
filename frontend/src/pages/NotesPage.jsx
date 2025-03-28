import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Folder, Trash2, Search, MoveVertical } from "lucide-react";
import LeftNavbar from "../components/LeftNavbar";
import axios from "axios";
import MarkdownRenderer from "../components/MarkdownRenderer";
import IconStore from "../components/IconStore";

const NotesPage = () => {
    const [sections, setSections] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [newSectionName, setNewSectionName] = useState("");

    const API_URL =
        import.meta.env.MODE === "development"
            ? "http://localhost:3000/api/sectionNotes"
            : "/api/sectionNotes";

    // Fetch health vault data on component mount
    useEffect(() => {
        const fetchHealthVault = async () => {
            try {
                const response = await axios.get(API_URL, {
                    withCredentials: true,
                });
                setSections(response.data.sections || []);
            } catch (error) {
                console.error("Error fetching health vault:", error);
            }
        };

        fetchHealthVault();
    }, []);

    const saveSectionsToDB = async (updatedSections) => {
        try {
            await axios.post(
                API_URL,
                { sections: updatedSections },
                { withCredentials: true }
            );
        } catch (error) {
            console.error("Error saving sections to DB:", error);
        }
    };

    const addSection = () => {
        const newSection = {
            name: `New Section ${sections.length + 1}`,
            texts: [],
        };
        setSections([...sections, newSection]);
        saveSectionsToDB([...sections, newSection]); // Save to DB after adding
    };

    const addTextEntry = (sectionIndex) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].texts.push({
            content: "Write note here...", // Default value
            isEditing: true,
        });
        setSections(updatedSections);
        saveSectionsToDB(updatedSections);
    };

    const updateTextEntry = (sectionIndex, textIndex, value) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].texts[textIndex].content = value;
        setSections(updatedSections);
        saveSectionsToDB(updatedSections);
    };

    const saveTextEntry = (sectionIndex, textIndex) => {
        const updatedSections = [...sections];

        // Check if the text is empty
        if (
            updatedSections[sectionIndex].texts[textIndex].content.trim() === ""
        ) {
            // Remove the empty text entry
            updatedSections[sectionIndex].texts.splice(textIndex, 1);
        } else {
            // Otherwise, mark it as not editing
            updatedSections[sectionIndex].texts[textIndex].isEditing = false;
        }

        setSections(updatedSections);
        saveSectionsToDB(updatedSections);
    };

    const editTextEntry = (sectionIndex, textIndex) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].texts[textIndex].isEditing = true;
        setSections(updatedSections);
        saveSectionsToDB(updatedSections);
    };

    const deleteTextEntry = (sectionIndex, textIndex) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].texts.splice(textIndex, 1);
        setSections(updatedSections);
        saveSectionsToDB(updatedSections);
    };

    const deleteSection = (index) => {
        const updatedSections = sections.filter((_, i) => i !== index);
        setSections(updatedSections);
        saveSectionsToDB(updatedSections);
    };

    const startEditing = (index, name) => {
        setEditingIndex(index);
        setNewSectionName(name);
    };

    const saveNewSectionName = (index) => {
        if (newSectionName.trim() === "") return;
        const updatedSections = [...sections];
        updatedSections[index].name = newSectionName;
        setSections(updatedSections);
        saveSectionsToDB(updatedSections);
        setEditingIndex(null);
    };

    return (
        <div className="h-screen w-full flex">
            <div className="min-w-[250px]">
                <LeftNavbar />
            </div>

            <div className="flex-1 bg-accent-2">
                <div className="flex justify-between items-center py-4 px-16">
                    <h2 className="text-3xl font-bold text-primary no-select">
                        My Notes
                    </h2>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center p-1 w-md bg-accent-4 rounded-ten border-2 border-tertiary inner-shadow focus-within:border-primary transition duration-300 group">
                            <IconStore
                                name="search"
                                className="w-5 h-5 mr-1 ml-2 group-focus-within:stroke-primary transition duration-300"
                                color="gray"
                            />
                            <input
                                type="text"
                                placeholder="Can't find the one you're looking for?"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="flex-1 bg-transparent outline-none p-2 text-white placeholder-gray-400 no-select"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 ml-2 p-3 bg-primary cursor-pointer text-accent-4 drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 no-select focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                            onClick={addSection}
                        >
                            <PlusCircle size={20} /> Add Section
                        </motion.button>
                    </div>
                </div>

                <div className="space-y-6 max-h-[calc(100vh-85px)] h-full 2xl:mx-40 xl:mx-20 overflow-y-auto pr-4">
                    {sections.length > 0 ? (
                        sections
                            .filter((section) =>
                                section.name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                            )
                            .map((section, sectionIndex) => (
                                <motion.div
                                    key={sectionIndex}
                                    className="bg-accent-4 p-4 rounded-ten drop-shadow-custom border border-accent-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {/* Section Header */}
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center gap-2">
                                            <Folder
                                                size={20}
                                                className="text-primary"
                                            />

                                            {/* Editable Section Name */}
                                            {editingIndex === sectionIndex ? (
                                                <input
                                                    type="text"
                                                    value={newSectionName}
                                                    onChange={(e) =>
                                                        setNewSectionName(
                                                            e.target.value
                                                        )
                                                    }
                                                    onBlur={() =>
                                                        saveNewSectionName(
                                                            sectionIndex
                                                        )
                                                    }
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") {
                                                            saveNewSectionName(
                                                                sectionIndex
                                                            );
                                                        }
                                                    }}
                                                    className="border px-2 py-1 rounded-seven text-white focus:ring-2 focus:ring-primary focus:outline-none"
                                                    autoFocus
                                                />
                                            ) : (
                                                <h3
                                                    className="text-xl font-semibold text-primary cursor-pointer"
                                                    onClick={() =>
                                                        startEditing(
                                                            sectionIndex,
                                                            section.name
                                                        )
                                                    }
                                                >
                                                    {section.name}
                                                </h3>
                                            )}
                                        </div>
                                        {/* Upload & Delete Buttons */}
                                        <div className="flex items-center gap-4">
                                            <button
                                                className="bg-accent-1 text-yellow-500 font-semibold px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-900 cursor-pointer no-select transition text-sm"
                                                onClick={() =>
                                                    addTextEntry(sectionIndex)
                                                }
                                            >
                                                <PlusCircle size={18} /> Add
                                                Text
                                            </button>

                                            <button
                                                className={`px-3 py-2 rounded-lg flex items-center gap-2 transition text-sm ${
                                                    section.texts.length === 0
                                                        ? "bg-accent-1 text-red-500 hover:bg-red-900 cursor-pointer"
                                                        : "bg-accent-1 text-accent-5 cursor-not-allowed"
                                                }`}
                                                onClick={() =>
                                                    deleteSection(sectionIndex)
                                                }
                                                disabled={
                                                    section.texts.length > 0
                                                }
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Text Entries */}
                                    <div className="mt-4 space-y-2">
                                        {section.texts.map(
                                            (text, textIndex) => (
                                                <div
                                                    key={textIndex}
                                                    className="bg-accent-1 px-10 text-white p-3 rounded-ten mb-4 relative"
                                                >
                                                    {text.isEditing ? (
                                                        <>
                                                            <textarea
                                                                value={
                                                                    text.content
                                                                }
                                                                onChange={(e) =>
                                                                    updateTextEntry(
                                                                        sectionIndex,
                                                                        textIndex,
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                onBlur={() =>
                                                                    saveTextEntry(
                                                                        sectionIndex,
                                                                        textIndex
                                                                    )
                                                                }
                                                                className="w-full p-2 border-none rounded-seven focus:ring-2 focus:ring-primary focus:outline-none"
                                                                autoFocus
                                                                rows={10}
                                                            />
                                                            <MoveVertical className="absolute bottom-2 right-8 animate-bounce-slow pointer-events-none text-primary" />
                                                        </>
                                                    ) : (
                                                        <div
                                                            onClick={() =>
                                                                editTextEntry(
                                                                    sectionIndex,
                                                                    textIndex
                                                                )
                                                            }
                                                            className="cursor-pointer"
                                                        >
                                                            <MarkdownRenderer
                                                                content={
                                                                    text.content
                                                                }
                                                            />
                                                        </div>
                                                    )}
                                                    <button
                                                        className="absolute top-2 right-4 text-red-500 hover:text-red-700 mt-2 cursor-pointer"
                                                        onClick={() =>
                                                            deleteTextEntry(
                                                                sectionIndex,
                                                                textIndex
                                                            )
                                                        }
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </motion.div>
                            ))
                    ) : (
                        <div className="text-center flex h-full w-full items-center justify-center">
                            <p className="text-accent-5 text-lg mb-4">
                                No sections found.
                            </p>
                        </div>
                    )}
                    {/* Add Section Button at Bottom */}
                    {sections.length > 0 && (
                        <div className="flex items-center my-6">
                            <hr className="flex-grow border-accent-5 border-1" />
                            <button
                                onClick={addSection}
                                className="flex items-center gap-2 text-primary hover:text-[#85bb60] cursor-pointer transition text-md font-semibold px-4"
                            >
                                <PlusCircle size={22} /> Add Section
                            </button>
                            <hr className="flex-grow border-accent-5 border-1" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotesPage;
