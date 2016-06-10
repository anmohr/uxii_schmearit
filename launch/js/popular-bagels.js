$(function () {
    
    function getLSItem (name, def) {
        var value = def;
        try {
            value = JSON.parse(localStorage.getItem(name));
        } catch (e) {}
        return value || def;
    }
    
    // set the item in the local storage
    function setLSItem (name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }
    
    function getItems () {
        // get the items json
        var items = getLSItem("products", ITEMS);
        items.forEach(function (c) {
            c.favorite = c.favorite || false;
            c.rating = c.rating || 0;
        });
        return items;
    }
    
    // filter
    function filterBy(prop, value) {
        return products.filter(function (c) {
            return c[prop] === value;
        });
    }
    
    var products = getItems();
    
    // template from html
    var $itemTemplate = $(".templates .item-template > div");
    function render (items, $container) {
        $container = $($container);
        
        var $items = items.map(function (currentItem, index) {
            var $clone = $itemTemplate.clone();
            
            $(".item-price", $clone).text(currentItem.price);
            $(".position", $clone).text(index + 1);
            $(".ingredient", $clone).html(currentItem.ingredients.join("<br>"));
           
            $clone.attr("data-index", products.indexOf(currentItem));
            
           //heart
            $(".heart_fave", $clone)
                // Set the path
                .attr(
                    "src",
                    "images/favorite" + (currentItem.favorite ? "-red" : "") + ".svg"
                )[(currentItem.favorite ? "remove" : "add") + "Class"]("heart-disabled");
            return $clone;
        });
    
        $container.html($items);
    }
    
    function rerenderEverything () {
        
        // filters based on category or if favorited
         var tab1Content = products
           , tab2Content = filterBy("category", "sweet")
           , tab3Content = filterBy("category", "savory")
           , tab4Content = filterBy("category", "unusual")
           , tab5Content = filterBy("favorite", true)
           ;

        render(tab1Content, "#tab1");
        render(tab2Content, "#tab2");
        render(tab3Content, "#tab3");
        render(tab4Content, "#tab4");
        render(tab5Content, "#tab5");
        
        setLSItem("products", products);
    }
    rerenderEverything();
    
    //click for heart toggle
    $(document).on("click", ".heart_fave", function () {
        var $this = $(this);
        var favorited = false;
        
        if ($this.toggleClass("heart-disabled").hasClass("heart-disabled")) {
            $this.attr("src", "images/favorite.svg");
            favorited = false;
        } else {
            $this.attr("src", "images/favorite-red.svg");
            favorited = true;
        }
        
        products[$this.closest("[data-index]").attr("data-index")].favorite = favorited;
        
        rerenderEverything();
    });
});