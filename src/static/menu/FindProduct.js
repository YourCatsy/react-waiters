export default function findMeal() {
    let input = document.getElementById('input_second');
    let filter = input.value.toUpperCase();
    let lis = document.querySelectorAll(".unit_menu");
    for (let i = 0; i < lis.length; i++) {
        let name = lis[i].querySelectorAll('.name_second')[0].innerHTML;
        if (name.toUpperCase().indexOf(filter) == 0)
            lis[i].style.display = 'block';
        else
            lis[i].style.display = 'none';
    }
}
