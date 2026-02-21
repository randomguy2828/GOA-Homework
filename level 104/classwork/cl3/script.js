let student = {
    name: "Giorgi",
    surename: "Pavliashvili",
    grades: [10, 9, 8,],
    middle: function(){
        console.log((this.grades[0] + this.grades[1] + this.grades[2]) / 3)
    },
    min2: function(){
        min = this.grades[0]
        for(let i = 1; i < this.grades.length; i++){
            if(this.grades[i] < min){
                min = this.grades[i]
            }
        }
        console.log(min)
    }
}

student.min2