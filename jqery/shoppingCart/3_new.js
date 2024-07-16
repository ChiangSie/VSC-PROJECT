let storage = localStorage
function doFirst(){
    if(storage['addItemList'] == null){
        storage['addItemList'] = ''     // storage.setItem('addItemList', '')
    }

    // 先幫每一個 Add Cart 建立事件聆聽功能
    let list = document.querySelectorAll('.addButton')  // list 是陣列

    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', function(e){
            // alert(e.target.id)
            let teddyInfo = document.querySelector(`#${e.target.id} input`).value
            addItem(e.target.id, teddyInfo)
        })
    }
}
function addItem(itemId, itemValue){
    // alert(`${itemId}: ${itemValue}`)  // A1001: Formosa|formosa.jpg|5000
    // 動態新增
    // 1 先建標籤(或建立 Image 物件)
    let image = document.createElement('img')
    // let image = new Image()

    // 2 將該標籤的屬性和方法先寫好
    image.src = `imgs/${itemValue.split('|')[1]}`
    
    let title = document.createElement('span')
    title.innerText = itemValue.split('|')[0]
    
    let price = document.createElement('span')
    price.innerText = itemValue.split('|')[2]
    
    // 3 找到爸爸，加進去
    let newItem = document.getElementById('newItem')
    // 先確定爸爸有沒有小孩? 如果有要先刪除
    // 作法 1
    // while(newItem.childNodes.length >= 1){
    //     newItem.removeChild(newItem.firstChild)
    // }
    // 作法 2
    newItem.innerHTML = ''
        
    // 再顯示新物件
    newItem.appendChild(image)
    newItem.appendChild(title)
    newItem.appendChild(price)

    // 存入 storage
    if(storage[itemId]){
        alert(`You have checked.`)
    }else{
        storage['addItemList'] += `${itemId}, `
        storage.setItem(itemId, itemValue)
    }

    // 計算購買數量和小計
    let itemString = storage.getItem('addItemList')
    let items = itemString.substring(0, itemString.length - 2).split(`, `)
    // console.log(items);  // ['A1001', 'A1005', 'A1006', 'A1002']

    subtotal = 0
    for(let i = 0; i < items.length; i++){
        let itemInfo = storage.getItem(items[i])
        subtotal += parseInt(itemInfo.split('|')[2])        
    }

    document.getElementById('itemCount').innerText = items.length
    document.getElementById('subtotal').innerText = subtotal
}
window.addEventListener('load', doFirst);