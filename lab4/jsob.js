class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.class_id = class_id;
        this.email = email;
        this.phone_number = phone_number;
        this.dob = dob;
    }

    getFullName() {
        return `${this.last_name} ${this.first_name}`;
    }

    getAgeByYear() {
        const today = new Date();
        const birthdate = new Date(this.dob);
        const age = today.getFullYear() - birthdate.getFullYear();
        const month = today.getMonth() - birthdate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            return age - 1;
        } else {
            return age;
        }
    }

    getAgeByDay() {
        const today = new Date();
        const birthdate = new Date(this.dob);
        const diffTime = Math.abs(today - birthdate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
}

// Tạo danh sách sinh viên
const studentList = [
    new Student(1, 'Hậu', 'Nguyễn', 'A01', 'hau.nguyen@gmail.com', '0987654321', '2002-02-14'),
    new Student(2, 'Hùng', 'Nguyễn', 'A01', 'hug.nguyen@gmail.com', '0987654322', '2001-05-20'),
    new Student(3, 'Uyên', 'Trần', 'A02', 'uyn.tran@gmail.com', '0987654323', '2003-11-01'),
    new Student(4, 'Dương', 'Lê', 'A03', 'duog.le@gmail.com', '0987654324', '2000-12-31'),
    new Student(5, 'long', 'Phạm', 'A03', 'long.pham@gmail.com', '0987654325', '2002-04-10')
];

// Sắp xếp danh sách sinh viên theo tuổi
studentList.sort((a, b) => a.getAgeByDay() - b.getAgeByDay());

// In ra danh sách sinh viên đã sắp xếp theo tuổi
console.log("Danh sách sinh viên theo thứ tự từ thấp đến cao về tuổi:");
studentList.forEach(student => {
    console.log(`${student.id}. ${student.getFullName()}, ${student.getAgeByYear()} tuổi (${student.getAgeByDay()} ngày)`);
});

// In ra thông tin width và height của màn hình
console.log(`Width của màn hình: ${window.screen.width}`);
console.log(`Height của màn hình: ${window.screen.height}`);