import React from 'react';

function ResponsiveLayout() {

    return (
      <div className='container'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
}

function Header(){
  return(
    <div className='container mx-auto p-4'>
      <header className='flex justify-between items-center py-4 border-b border-gray-400'>
        <h1 className='text-2xl font-bold'>3F Friend</h1>
        <nav className='hidden md:flex space-x-4'>
          <a href='#' className='hover:text-green-500'>Trang chủ</a>
          <a href='#' className='hover:text-green-500'>Hỗ trợ</a>
          <a href='#' className='hover:text-green-500'>Đăng nhập</a>
          <a href='#' className='hover:text-green-500'>Đăng ký</a>
        </nav>
      <div className="md:hidden mt-4">
        <nav className="flex flex-col space-y-2">
          <a href="#" className="hover:text-green-500">Trang chủ</a>
          <a href="#" className="hover:text-green-500">Hỗ trợ</a>
          <a href="#" className="hover:text-green-500">Đăng nhập</a>
          <a href="#" className="hover:text-green-500">Đăng ký</a>
       </nav>
      </div>
       <div className='flex space-x-2' >
          <input type='text' placeholder='Search' className='border rounded-lg px-2 py-1'/>
          <button className='bg-blue-500 text-white rounded-lg px-3 py-1' >Search</button>
        </div>
      </header>
    </div>
  );
}

function Content(){
  return(
    <main className='py-8'>
      <h2 className='text-3xl text-center font-bold'>Nội dung chính</h2>
      <p className='text-center mb-6'>Chào mừng bạn đến với 3F Freind, nơi bạn có thể khám phá nhiều thông tin hữu ích và dịch vụ chất lượng cao.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
      <div className='border-t-2 border-blue-500 pt-4'>
        <h3 className='text-xl font-semibold mb-4'>Giới thiệu</h3>
        <ul>
          <li>Lịch sử phát triển</li>
          <li>Giới thiệu</li>
          <li>Lịch sử</li>
        </ul>
      </div>
      <div className='border-t-2 border-blue-500 pt-4'>
        <h3 className='text-xl font-semibold mb-4'>Dịch vụ</h3>
        <ul>
        <li>Lịch sử phát triển</li>
          <li>Giới thiệu</li>
          <li>Lịch sử</li>
        </ul>
      </div>
      <div className='border-t-2 border-blue-500 pt-4'>
        <h3 className='text-xl font-semibold mb-4'>Liên hệ</h3>
        <ul>
        <li>Lịch sử phát triển</li>
          <li>Giới thiệu</li>
          <li>Lịch sử</li>
        </ul>
      </div>
      <div className='border-t-2 border-blue-500 pt-4'>
        <h3 className='text-xl font-semibold mb-4'>Đánh giá</h3>
        <ul>
        <li>Lịch sử phát triển</li>
          <li>Giới thiệu</li>
          <li>Lịch sử</li>
        </ul>
      </div>
      <div className='border-t-2 border-blue-500 pt-4'>
        <h3 className='text-xl font-semibold mb-4'>Chăm sóc</h3>
        <ul>
        <li>Lịch sử phát triển</li>
          <li>Giới thiệu</li>
          <li>Lịch sử</li>
        </ul>
      </div>
      <div className='border-t-2 border-blue-500 pt-4'>
        <h3 className='text-xl font-semibold mb-4'>Phản hồi</h3>
        <ul>
        <li>Lịch sử phát triển</li>
          <li>Giới thiệu</li>
          <li>Lịch sử</li>
        </ul>
      </div>
      </div>
    </main>
    
  );
}

function Footer(){
  return (
    <footer class=" bg-gray-800 text-white py-6 mt-8 ">
      <div class="container mx-auto text-center">
        <p>© 2024 #F Friend. All Rights Reserved.</p>
        <div class="flex justify-center space-x-4 mt-4">
          <a href="#" class="hover:text-gray-300">
            Facebook
          </a>
          <a href="#" class="hover:text-gray-300">
            Twitter
          </a>
          <a href="#" class="hover:text-gray-300">
            Instagram
          </a>
        </div>
        <p class="mt-4">
          Địa chỉ: 53/15 Phạm Ngọc Thảo, Quận Tân Phú, TP. Hồ Chí Minh
        </p>
        <p>Điện thoại: 0335700945</p>
      </div>
    </footer>
  );
}

export default ResponsiveLayout;