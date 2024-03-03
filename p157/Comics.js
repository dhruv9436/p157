AFRAME.registerComponent("comics", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
  
       createCards: function () {
        const thumbNailsRef = [
          {
            id: "Spiderman-Comic",
            title: "Spiderman Comic",
            url: "./assets/spiderman_comics.jpg",
          },
          {
            id: "super-man-comic",
            title: "super man Comic",
            url: "./assets/super_man_comic.jpg",
          },
    
          {
            id: "Aero-comic",
            title: "Aero Comic",
            url: "./assets/Aero_comic.jpg",
          },
          {
            id: "the-new-warriors-comic",
            title: "The New Warriors Comic",
            url: "./assets/the_new_Warriors_comic.jpg",
          },
        ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;

  
  
  
        // Border Element
        const borderEL=this.createBorder(position,item.id) 
        // Thumbnail Element
        const thumbNail= this.createThumbnail(item)
        borderEL.appendChild(thumbNail);
        // Title Text Element
        const titleEL= this.createTitleEl(position, item)
        borderEL.appendChild(titleEL);
  
        this.placesContainer.appendChild(borderEL);
      }
    },
    createBorder:function(position,id){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"ring",
        radiusInner:9,
        radiusOuter:10,
  
      });
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{
        color:"#0077cc",
        opacity:1
      });
  
      return entityEl
    },
    createThumbnail:function(item){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry",{
        primitive:"circle",
        radius: 9
      });
      
      entityEl.setAttribute("material", {src: item.url});
      return entityEl
    },
    createTitleEl: function(position, item){
      const entityEl= document.createElement("a-entity");
      entityEl.setAttribute("text",{
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition)
      entityEl.setAttribute("visible", true)
  
      return entityEl  
    }
  });
  