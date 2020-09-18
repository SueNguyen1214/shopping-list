 function shoppingList(){
    $('#js-shopping-list-form').submit( event =>{
        event.preventDefault();// stop the default form submission behavior
        const newItem=$('#shopping-list-entry').val(); // assign the new key in item to newItem
    //to add the new keyed in item to the check list
    if (newItem!==""){
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
        //need to make the entry box empty for future entries
        $('#shopping-list-entry').val("");
    }
    });
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    });    
    
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
    });
 }

$(shoppingList);