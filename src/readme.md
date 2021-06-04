Paging not Paging with API
Cái này làm cả tối giờ mới nhận ra
Mấy cái số liệu Tân làm đang là làm JS thuần à
Mấy cái dữ liệu đó trên API nó trả về rồi thay vào thôi
Mà gọi API như thế nào thì phải đọc hiểu những thứ sau đây trước đã
convertQueryToObject và serializeObjToQueryURL (2 cái chính)
decodeURI,decodeURIComponent,encodeURIComponent,encodeURI,hasOwnProperty(các cái phụ)
Hiểu mấy cái note ở trên mới dễ làm cái trang shop đó nha
Còn đây là cách thuần nên gọi xong setState để hiểu cách nó chạy trước đã

Bước 1: Setup để hiển thị số sản phẩm mong muốn (hình 1)
const [currentPage, setCurrentPage] = useState(1); //currentPage là trang mà mình click vào ví dụ đang ở trang 2 thì currentPage = 2 (chú ý cái này qua bên Paging đặt class active nha)
const [itemPerPage] = useState(3); //itemPerPage là số item 1 trang
==> Mấy cái thứ này đều lấy trong API ra hết nhưng k biết cách lấy đọc hoài k hiểu nên làm thuần luôn kkk, khi nào biết cách lấy thì k cần setState như v kkk
// Get current item
const indexOfLastItem = currentPage \* itemPerPage; //Nên console chỗ này chô dễ hiểu (hiểu rồi thì thôi kk Dân giỏi mà)
const indexOfFirstItem = indexOfLastItem - itemPerPage; //Chỗ này cũng nên console
const currentItem = product.slice(indexOfFirstItem, indexOfLastItem);
==> Giải thích cho 2 cái ở trên thì Dân vào xem link này để hiểu về slice("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_slice_array")
Hiểu nôm na cái currentItem nó có nhiệm vụ là lấy bao nhiêu sản phẩm của cái mảng product để render ra màn hình
Khi Dân console 2 cái trên thì sẽ hiểu là indexOfFirstItem là vị trí bắt đầu lấy, indexOfLastItem là số lượng lấy ra
Lúc này Dân console cái currentItem ra sẽ được 1 cái mảng mới chứa 3 sản phẩm mình vừa lấy

Bước 2: Render sản phẩm từ mảng mới cho 1 trang (hình 2 và 3)
Sau khi đã lấy được currentItem thì ở chỗ này
Thay vì Dân dùng thằng product từ reducer trả về rồi Dân map nó ra để nó ra sản phẩm là 15 luôn
Thì Dân thay cái product bằng cái currentItem để nó map ra đúng số sản phẩm mình mong muôn thôi k có map ra hết
Tới đây nếu quên currentItem thì nhìn lên trên lại nha để hiểu ^^
==> Như vậy là xong các bước để lấy đúng số sản phẩm mình cần cho 1 trang rồi đó

Bước 3: Xử lý Paging (hình 4 và 5)
Trong component Paging đầu tiên Dân gọi ra 2 cái prop là itemPerPage(số sản phẩm 1 trang), totalItem(tổng số sản phẩm)
Xem hình Dân sẽ thấy là Tân tạo ra 1 cái mảng rỗng, tiếp đến là Tân tính số trang và làm tròn số đến phần nguyên
Sau đó sẽ chạy 1 vòng lặp để nó render ra số trang để xuống dưới mình map ra
Đó nó sẽ render ra đúng số trang mà mình sẽ truyền vô. Dân nhìn cái hàm for nó chạy là hiểu à

Bước 4: Lấy dữ liệu đế hiển thị ra màn hình (hình 6)
Quay lại component mà Dân chứa paging, Dân lấy cái 2 cái prop mình truyền vào bên Paging
Thì cái prop đầu tiền itemPerPage nó sẽ nhận giá trị itemPerPage của component cha,
bên kia Dân đã xử lý logic rồi nhưng chưa có giá trị chính xác để cái logic đó chạy,
nên bên đây Dân gán giá trị mình đã set ở trên cho cái paging để paging nó nhận đc giá trị và nó hoạt động logic
chỉ là tên thôi nên Dân đặt tên biến bên Paging sao cũng được nhưng quan trọng về component cha mình phải truyền đúng giá trị nó cần nha
Cái totalItem bên kia là tổng số sản phẩm nên bên đây Dân cũng phải truyền đúng cái tổng số sản phẩm của mình là product.length

Bước 5: Click vào số trang để hiển thị đúng sản phẩm của trang đó(hình 7, 8 và 9)
Dân đã hoàn thành tới đây là đã lấy được sản phẩm cần hiển thị cho trang đầu tiên rồi, giờ xử lý logic để nó nhảy qua trang 2,3,...
Quay lại component Paging, nhìn hình khoan để ý cái className
Dân đặt 1 sự kiện onClick vào đó truyền cho nó 1 cái arrowfunction, nó sẽ nhận cho mình 1 cái funtion là paginate(tiếng Việt là phân trang, bắt đầu hành động để khi mình click sẽ hiển thị số sản phẩm trang đó)
Dân truyền vào cái func đó 1 cái number để nó biết là trang nào
Rồi Dân quăng cái paginate vào thành phần prop của trang Paging rồi qua component cha lấy nó ra như nãy lấy itemPerPage và totalItem (hình 8)
Vì nó là 1 function nên nó cũng sẽ nhận về 1 funtion thì component cha, Dân lấy được nó như hình 8 rồi truyền cho nó 1 function(tên gì cũng đc nha)
Xong Dân nhìn hình 9, đó lúc này cái function này nó thực hiện nhiệm vụ setCurrentPage (để ý kĩ khúc này nhe, bên Paging Dân click vào số mấy thì cái setCurrentPage sẽ set lại cái CurrentPage để hiển thị ra đúng cái trang đó chứa các sản phẩm tương ứng)
Khúc này từ từ thôi nha xem kĩ cho hiểu cái luồng chạy

Bước 6: Active thẻ paging tương ứng với số trang (hình 10)
Cách logic này theo Tân nghĩ thôi nha tại làm đại chứ trên mạng k có chỉ với lại chưa xem của a Vương lại a Vương gọi API chỗ này luôn rồi
Giải thích nè, kiểu là khi Dân click vào cái paging vị trí số 2 đi thì cái number bên Paging cũng là số 2, bên thằng component cha này nó
setCurrentPage lại thì cái CurrentPage cũng bằng 2 nên là CurrentPage sẽ luôn bằng cái number
Cho nên tại Paging bên trang component cha thì Dân lấy cái CurrentPage truyền vô cái Paging
như truyền prop bình thường thôi mà này là mình truyền ngược lại kk
Sau đó qua bên Paging mình nhận lại cái CurrentPage nãy mình truyền
Dân bắt đầu nhìn lại cái hình 7 hay 8 gì đó có cái className Tân có để number === CurrentPage đó
Đó thì khi 2 cái đó bằng nhau thì nó tự động gắn cái class active vào kk

Còn đây là 1 số logic nữa để mình bấm nút tiến lùi
// onClick={() => paginate(currentPage - 1)} // lùi 1 trang
// onClick={() => paginate(currentPage + 1)} // tiến 1 trang
(2 cái trên còn thiếu điều kiện để khi mình về trang 1 hoặc đến trang cuối cùng nó sẽ k thực hiện cái OnClick đó nữa)
// onClick={() => paginate(totalPages - (totalPages - 1))} //Quay về trang đầu tiên
// onClick={() => paginate(totalPages)} //Tiến tới trang cuối cùng

Dân đọc hiểu mấy này đi để An chỉ gọi API nó dễ hiểu hơn, mấy cái ở trên gọi API là có dữ liệu hết á k cần phải set như v đâu nha kk
Lưu lại mấy cái này đi mốt ai hỏi thể hiện liền kk, còn cái countDown nữa ở trang coming-soon á
Để sáng mai dậy Tân làm cái read giải thích nốt luôn cho kkk
