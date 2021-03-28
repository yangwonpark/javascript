export default function random() {
    // Math.floor(num)  =>  주어진 num 같거나 작은 정수 중 가장 큰 값을 반환
    //                  =>  즉, 소숫점 밑으로는 다 버림
    // Math.random()    =>  0보다 작은 난수 발생
    
    return Math.floor(Math.random() * 10);  // 정수 난수 발생
}