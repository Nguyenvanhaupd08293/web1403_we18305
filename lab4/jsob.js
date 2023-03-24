// Tạo class Student
class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.class_id = class_id;
        this.email = email;
        this.phone_number = phone_number;
        this.dob = new Date(dob);
    }

    // Phương thức lấy tên đầy đủ
    getFullName() {
        return `${this.last_name} ${this.first_name}`;
    }

    // Phương thức tính số tuổi hiện tại theo năm
    getAgeByYear() {
        const currentYear = new Date().getFullYear();
        const birthYear = this.dob.getFullYear();
        return currentYear - birthYear;
    }

    // Phương thức tính số tuổi hiện tại theo ngày
    getAgeByDay() {
        const oneDay = 24 * 60 * 60 * 1000; // số milliseconds trong 1 ngày
        const currentDate = new Date();
        const birthDate = this.dob;
        return Math.round(Math.abs((currentDate - birthDate) / oneDay));
    }
}

// Tạo danh sách 5 sinh viên
const students = [
    new Student(1, 'Thu', 'Nguyen', 'B01', 'thu.nguyen@example.com', '0987654321', '1997-06-30'),
    new Student(2, 'Nam', 'Tran', 'B02', 'nam.tran@example.com', '0123456789', '1999-01-01'),
    new Student(3, 'Huy', 'Vo', 'B01', 'huy.vo@example.com', '0912345678', '2000-12-31'),
    new Student(4, 'Tu', 'Le', 'B01', 'tu.le@example.com', '0975318642', '1998-03-15'),
    new Student(5, 'Thao', 'Nguyen', 'B03', 'thao.nguyen@example.com', '0987654321', '2002-11-02')
];

// Sắp xếp danh sách sinh viên theo thứ tự từ cao đến thấp (tính theo ngày)
students.sort((a, b) => a.getAgeByDay() - b.getAgeByDay());

// In danh sách sinh viên
console.log('Danh sách sinh viên:');
let i = 1;
for (const student of students) {
    console.log(`${i}. ${student.getFullName()} - ${student.getAgeByYear()} tuổi (${student.getAgeByDay()} ngày)`);
    i++;
}

// In thông tin width và height của màn hình
console.log(`Width: ${window.innerWidth}px, Height: ${window.innerHeight}px`);