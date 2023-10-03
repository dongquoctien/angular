**Bước 1: Khởi tạo project**
----------------------------

Phần này giành cho các bạn chưa có ứng dụng Angular và mình sẽ hướng dẫn trên phiên bản Angular 8 mới nhất hiện tại.

Các bạn có thể dùng phần mềm code khác nhau để tạo project Angular, nhưng trong bài này mình sẽ hướng dẫn trên Terminal của Visual Studio Code, các bạn tạo ra 1 folder mới với tên tùy ý mà các bạn muốn.

Sau đó các bạn mở **Terminal** của Visual Studio Code lên và thực hiện như bên dưới.

Đầu tiên các bạn cài đặt Angular CLI bằng câu lệnh:

    npm install -g @angular/cli

Sau khi chạy xong các bạn tạo ứng dụng Angular bằng cách gõ:

    ng new deploy-github-angular

Trong đó **deploy-github-angular** là tên của project mà bạn muốn tạo, lúc này khi chạy xong bạn sẽ thấy project Angular đã được tạo.

Các bạn gõ tiếp :

    cd deploy-github-angular
    ng serve --open hoặc ng serve --o

Trong đó:

cd deploy-github-angular có nghĩa là truy cập vào bên trong folder deploy-github-angular

ng serve --open hoặc ng serve --o là để mở project của các bạn lên.

Lúc này các bạn sẽ thấy giao diện running của Angular, có nghĩa là các bạn đã tạo thành công 1 project Angular rồi đó.

![running angular](https://media.techmaster.vn/api/static/9591/bm6ungs51coccro1i0vg)

Khi đã tạo được project và mở được lên như phía trên các bạn tiếp tục thực hiện bước 2

**Bước 2: Push lên GitHub Repository**
--------------------------------------

Trước khi các bạn tạo một GitHub Repository các bạn hãy build ứng dụng trước:

Bằng cách gõ câu lệnh sau:

    ng build

![](https://ibb.co/tb6LGLH)

Lúc này sẽ xuất hiện một thư mục mới tên là **dist,** trong này chứa toàn bộ project đã được build ra.

Chạy xong các bạn gõ tiếp:

    ng build 'deploy-github-angular' --prod --vendor-chunk=true

Nếu bị lỗi có thể do các bạn chưa trỏ đúng tới bên trong thư mục của project, gõ **cd deploy-github-angular** để trỏ vào bên trong project.

Tiếp theo các bạn cài đặt cho mình **“**__**gh-pages**__**”** package bằng câu lệnh bên dưới.

    npm i -g angular-cli-ghpages

Sau khi thành công các bạn hãy tạo cho mình một **GitHub Repository** bằng cách dưới đây**:**

Truy cập vào [Github](https://github.com/new) và tạo một repository mới như hình

![create a new repository](https://media.techmaster.vn/api/static/9591/bm6uqb451coccro1i100)

Các bạn ấn vào **Create repository** sau đó sẽ ra hình như sau:

![command line new repository](https://media.techmaster.vn/api/static/9591/bm6ur0k51coccro1i10g)

Các bạn quay trở lại với Visual Studio Code và làm theo như phía trên hình.

**chú ý**: chỗ git remote add origin chính là đường dẫn **Git** **repository** của các bạn.

    git add .
    git commit -m "second commit"
    git remote add origin https://github.com/thuqnn/deploy-github-angular.git
    git push -u origin master

Sau khi đã commit thành công và trên git hiển thị được như hình dưới

![push data git hub](https://media.techmaster.vn/api/static/9591/bm6vjb451coccro1i11g)

**Bước 3: Deploy ứng dụng lên Git pages từ GitHub repository**
--------------------------------------------------------------

Chúng ta sử dụng câu lệnh sau để deploy ứng dụng lên git pages:

__Quan trọng: các bước cuối này rất dễ sai đường dẫn nhé, cần chú ý__

    ng build --prod --base-href https://thuqnn.github.io/deploy-github-angular/

Sau khi chạy xong các bạn tiếp tục gõ lệnh:

    ng build --prod --base-href=/deploy-github-angular/

Ở đây **"deploy-github-angular"** là tên kho trên git của các bạn

Cuối cùng các bạn gõ câu lệnh :

    ngh --dir=dist/deploy-github-angular

Bước cuối này "deploy-github-angular" chính là tên thư mục được build nằm trong thư mục dist nhé.

Và thành quả mà các bạn sẽ thầy chính là :

![deploy angular app done](https://media.techmaster.vn/api/static/9591/bm712vs51coccro1i160)

Các bạn vào **setting của repository** đó và cuộn chuột xuống mục **GitHub Pages** đây để xem link Git pages đã được publish nhé.

![github pages link publish](https://media.techmaster.vn/api/static/9591/bm713k451coccro1i16g)

Vậy là xong rồi đó.

Các bạn có thể truy cập vào trang bằng cách [https://{username-git-hub}.github.io/{tên-repository}/](https://%7Busername-git-hub%7D.github.io/%7Bt%C3%AAn-repository%7D/) để xem thành quả.

Link demo git pages : [https://thuqnn.github.io/deploy-github-angular/](https://thuqnn.github.io/deploy-github-angular/)

Một số giới hạn của GitHub Pages:

*   Source code có giới hạn đề xuất là 1G
    
*   Các trang được publish lên không lớn hơn 1 GB
    
*   Giới hạn băng thông là 100GB/tháng
    
*   Giới hạn 10 builds/giờ
