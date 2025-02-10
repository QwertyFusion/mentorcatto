import LeftNavbar from "../components/LeftNavbar";

const ChatPage = () => {
  return (
    <div className='h-screen w-full flex'>
      <div className='min-w-[250px]'>
        <LeftNavbar />
      </div>

      <div className='flex-1 bg-gray-100'>
        <h2 className='p-4'>Right Column</h2>
      </div>
    </div>
  );
};

export default ChatPage;