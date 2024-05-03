function solution(phone_number) {
    var words = phone_number.slice(-4);
    var answer = words.padStart(phone_number.length, '*');
    return answer;
}