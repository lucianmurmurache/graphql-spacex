function ShowError() {
  return (
    <div className='h-screen max-w-6xl mx-auto bg-[url(https://techcrunch.com/wp-content/uploads/2021/09/firefly-rocket-explosion.gif)] bg-cover bg-center'>
      <div className='w-fit mx-auto pt-40 grid place-items-center'>
        <h1 className='text-xl md:text-3xl text-white'>
          Oops! There was an error...
        </h1>
        <br />
        <p className='text-6xl'>👩🏻‍🚀👨🏿‍🚀</p>
        <a
          className='bg-blue text-white py-2 px-4 rounded text-center'
          href='/'
          aria-label='Access the home page'
        >
          Back to safety
        </a>
      </div>
    </div>
  );
}

export default ShowError;
