import { motion } from "framer-motion"
import { Lock, Mail, User } from "lucide-react"
import Input from "../components/Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const { signup, error, isLoading } = useAuthStore();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            await signup(email, password, name);
            navigate("/verify-email");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-accent-4 rounded-ten drop-shadow-custom overflow-hi"
    >
        <div className="p-8">
            <h2 className="text-3xl font-semibold mb-6 text-center text-primary">
                Create Account
            </h2>

            <form onSubmit={handleSignUp}>
                <Input 
                    icon={User}
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input 
                    icon={Mail}
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    icon={Lock}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
                <PasswordStrengthMeter password={password}/>

                <motion.button 
                className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-seven drop-shadow-custom 
                hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                focus:ring-offset-accent-3 transition duration-200'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                disabled={isLoading}>
                    {isLoading ? <Loader className='w-6 h-6 animate-spin  mx-auto' /> : "Sign Up"}
                </motion.button>
            </form>
        </div>
        <div className="px-8 py-4 bg-gray-900 flex justify-center rounded-b-ten">
            <p className="text-sm text-secondary">
                Already have an account?{" "}
                <Link to={"/login"} className="text-primary hover:underline">Login</Link>
            </p>
        </div>
    </motion.div>
  )
}

export default SignUpPage
