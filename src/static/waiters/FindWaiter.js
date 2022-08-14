export default function findWaiter() {
    let input = document.getElementById('input');
    let filter = input.value.toUpperCase();
    let lis = document.getElementsByTagName('li');
    for (let i = 0; i < lis.length; i++) {
        let name = lis[i].getElementsByClassName('waiter_name')[0].innerHTML;
        if (name.toUpperCase().indexOf(filter) == 0)
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }
}

