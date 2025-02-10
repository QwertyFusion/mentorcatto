import LeftNavbar from "../components/LeftNavbar";

const ChatPage = () => {
  return (
    <div className='h-screen w-full grid grid-cols-12'>

      <div className='col-span-2'>

        <LeftNavbar />
      </div>

      <div className='col-span-10 bg-gray-100'>

        <h2 className='p-4'>Right Column</h2>
      </div>
    </div>
  );
};

export default ChatPage;