var mongoose = require("mongoose");
var Service         = require("./models/service"),
    Testimonial     = require("./models/testimonial"),
    Image           = require("./models/image"),
    Quote           = require("./models/quote"),
    Blog            = require("./models/blog");


var bdata = [
    {
        title: "NAIL DESIGN INSPIRATION", 
        image: "https://www.fashionising.cz/wp-content/uploads/2020/02/designecologist-r-Ej0NQmFlQ-unsplash.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Aliquet nibh praesent tristique magna sit amet. Quis enim lobortis scelerisque fermentum. Donec adipiscing tristique risus nec. Dictumst quisque sagittis purus sit. Mattis nunc sed blandit libero volutpat sed. Pellentesque dignissim enim sit amet venenatis urna cursus. Ultrices in iaculis nunc sed.Tempus quam pellentesque nec nam aliquam sem. Nibh sit amet commodo nulla facilisi nullam. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Morbi tincidunt ornare massa eget egestas. Donec massa sapien faucibus et. Adipiscing elit pellentesque habitant morbi. Leo a diam sollicitudin tempor id eu nisl nunc. Cursus sit amet dictum sit amet justo donec. Dictum non consectetur a erat nam at lectus urna duis. Orci porta non pulvinar neque laoreet suspendisse interdum. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. At tempor commodo ullamcorper a. Lectus proin nibh nisl condimentum id. Ornare massa eget egestas purus viverra accumsan in. Sagittis purus sit amet volutpat.Sapien pellentesque habitant morbi tristique. Donec enim diam vulputate ut pharetra sit. Nisi vitae suscipit tellus mauris a. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Elit at imperdiet dui accumsan sit amet. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Fames ac turpis egestas sed tempus urna et pharetra. Mattis enim ut tellus elementum sagittis vitae et. Massa tincidunt nunc pulvinar sapien et ligula. Urna nec tincidunt praesent semper feugiat nibh sed. Diam vulputate ut pharetra sit amet aliquam.Egestas sed tempus urna et pharetra pharetra massa. Pellentesque habitant morbi tristique senectus et netus. Et tortor at risus viverra adipiscing. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam maecenas ultricies mi eget mauris pharetra et. Malesuada fames ac turpis egestas maecenas pharetra. Sed sed risus pretium quam. Id aliquet lectus proin nibh nisl. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Sed felis eget velit aliquet sagittis id consectetur. Vel fringilla est ullamcorper eget nulla facilisi etiam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Phasellus faucibus scelerisque eleifend donec. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Leo in vitae turpis massa. Etiam sit amet nisl purus in. In dictum non consectetur a erat nam at lectus. Vulputate sapien nec sagittis aliquam.Porttitor eget dolor morbi non arcu risus quis varius quam. Dui faucibus in ornare quam viverra orci. Tincidunt vitae semper quis lectus. Risus ultricies tristique nulla aliquet enim tortor. Tincidunt id aliquet risus feugiat in ante. Commodo viverra maecenas accumsan lacus vel. Non enim praesent elementum facilisis leo vel fringilla. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Aenean euismod elementum nisi quis eleifend quam adipiscing. Orci nulla pellentesque dignissim enim. Id nibh tortor id aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Sit amet nisl purus in mollis nunc. Sollicitudin tempor id eu nisl nunc mi."
    },{
        title: "THREE MINUTE MAKEUP", 
        image: "https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Aliquet nibh praesent tristique magna sit amet. Quis enim lobortis scelerisque fermentum. Donec adipiscing tristique risus nec. Dictumst quisque sagittis purus sit. Mattis nunc sed blandit libero volutpat sed. Pellentesque dignissim enim sit amet venenatis urna cursus. Ultrices in iaculis nunc sed.Tempus quam pellentesque nec nam aliquam sem. Nibh sit amet commodo nulla facilisi nullam. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Morbi tincidunt ornare massa eget egestas. Donec massa sapien faucibus et. Adipiscing elit pellentesque habitant morbi. Leo a diam sollicitudin tempor id eu nisl nunc. Cursus sit amet dictum sit amet justo donec. Dictum non consectetur a erat nam at lectus urna duis. Orci porta non pulvinar neque laoreet suspendisse interdum. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. At tempor commodo ullamcorper a. Lectus proin nibh nisl condimentum id. Ornare massa eget egestas purus viverra accumsan in. Sagittis purus sit amet volutpat.Sapien pellentesque habitant morbi tristique. Donec enim diam vulputate ut pharetra sit. Nisi vitae suscipit tellus mauris a. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Elit at imperdiet dui accumsan sit amet. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Fames ac turpis egestas sed tempus urna et pharetra. Mattis enim ut tellus elementum sagittis vitae et. Massa tincidunt nunc pulvinar sapien et ligula. Urna nec tincidunt praesent semper feugiat nibh sed. Diam vulputate ut pharetra sit amet aliquam.Egestas sed tempus urna et pharetra pharetra massa. Pellentesque habitant morbi tristique senectus et netus. Et tortor at risus viverra adipiscing. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam maecenas ultricies mi eget mauris pharetra et. Malesuada fames ac turpis egestas maecenas pharetra. Sed sed risus pretium quam. Id aliquet lectus proin nibh nisl. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Sed felis eget velit aliquet sagittis id consectetur. Vel fringilla est ullamcorper eget nulla facilisi etiam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Phasellus faucibus scelerisque eleifend donec. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Leo in vitae turpis massa. Etiam sit amet nisl purus in. In dictum non consectetur a erat nam at lectus. Vulputate sapien nec sagittis aliquam.Porttitor eget dolor morbi non arcu risus quis varius quam. Dui faucibus in ornare quam viverra orci. Tincidunt vitae semper quis lectus. Risus ultricies tristique nulla aliquet enim tortor. Tincidunt id aliquet risus feugiat in ante. Commodo viverra maecenas accumsan lacus vel. Non enim praesent elementum facilisis leo vel fringilla. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Aenean euismod elementum nisi quis eleifend quam adipiscing. Orci nulla pellentesque dignissim enim. Id nibh tortor id aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Sit amet nisl purus in mollis nunc. Sollicitudin tempor id eu nisl nunc mi."
    },{
        title: "THE UNDONE LOOK", 
        image: "https://thebeautydepartment.com/wp-content/uploads/2017/03/undone-lived-in-hair-the-beauty-dept-kristin-ess-768x1024.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Aliquet nibh praesent tristique magna sit amet. Quis enim lobortis scelerisque fermentum. Donec adipiscing tristique risus nec. Dictumst quisque sagittis purus sit. Mattis nunc sed blandit libero volutpat sed. Pellentesque dignissim enim sit amet venenatis urna cursus. Ultrices in iaculis nunc sed.Tempus quam pellentesque nec nam aliquam sem. Nibh sit amet commodo nulla facilisi nullam. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Morbi tincidunt ornare massa eget egestas. Donec massa sapien faucibus et. Adipiscing elit pellentesque habitant morbi. Leo a diam sollicitudin tempor id eu nisl nunc. Cursus sit amet dictum sit amet justo donec. Dictum non consectetur a erat nam at lectus urna duis. Orci porta non pulvinar neque laoreet suspendisse interdum. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. At tempor commodo ullamcorper a. Lectus proin nibh nisl condimentum id. Ornare massa eget egestas purus viverra accumsan in. Sagittis purus sit amet volutpat.Sapien pellentesque habitant morbi tristique. Donec enim diam vulputate ut pharetra sit. Nisi vitae suscipit tellus mauris a. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Elit at imperdiet dui accumsan sit amet. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Fames ac turpis egestas sed tempus urna et pharetra. Mattis enim ut tellus elementum sagittis vitae et. Massa tincidunt nunc pulvinar sapien et ligula. Urna nec tincidunt praesent semper feugiat nibh sed. Diam vulputate ut pharetra sit amet aliquam.Egestas sed tempus urna et pharetra pharetra massa. Pellentesque habitant morbi tristique senectus et netus. Et tortor at risus viverra adipiscing. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam maecenas ultricies mi eget mauris pharetra et. Malesuada fames ac turpis egestas maecenas pharetra. Sed sed risus pretium quam. Id aliquet lectus proin nibh nisl. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Sed felis eget velit aliquet sagittis id consectetur. Vel fringilla est ullamcorper eget nulla facilisi etiam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Phasellus faucibus scelerisque eleifend donec. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Leo in vitae turpis massa. Etiam sit amet nisl purus in. In dictum non consectetur a erat nam at lectus. Vulputate sapien nec sagittis aliquam.Porttitor eget dolor morbi non arcu risus quis varius quam. Dui faucibus in ornare quam viverra orci. Tincidunt vitae semper quis lectus. Risus ultricies tristique nulla aliquet enim tortor. Tincidunt id aliquet risus feugiat in ante. Commodo viverra maecenas accumsan lacus vel. Non enim praesent elementum facilisis leo vel fringilla. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Aenean euismod elementum nisi quis eleifend quam adipiscing. Orci nulla pellentesque dignissim enim. Id nibh tortor id aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Sit amet nisl purus in mollis nunc. Sollicitudin tempor id eu nisl nunc mi."
    },{
        title: "BROWBONE WORN THREE WAYS", 
        image: "https://thebeautydepartment.com/wp-content/uploads/2017/03/browbone-3-ways-IG.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Aliquet nibh praesent tristique magna sit amet. Quis enim lobortis scelerisque fermentum. Donec adipiscing tristique risus nec. Dictumst quisque sagittis purus sit. Mattis nunc sed blandit libero volutpat sed. Pellentesque dignissim enim sit amet venenatis urna cursus. Ultrices in iaculis nunc sed.Tempus quam pellentesque nec nam aliquam sem. Nibh sit amet commodo nulla facilisi nullam. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Morbi tincidunt ornare massa eget egestas. Donec massa sapien faucibus et. Adipiscing elit pellentesque habitant morbi. Leo a diam sollicitudin tempor id eu nisl nunc. Cursus sit amet dictum sit amet justo donec. Dictum non consectetur a erat nam at lectus urna duis. Orci porta non pulvinar neque laoreet suspendisse interdum. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. At tempor commodo ullamcorper a. Lectus proin nibh nisl condimentum id. Ornare massa eget egestas purus viverra accumsan in. Sagittis purus sit amet volutpat.Sapien pellentesque habitant morbi tristique. Donec enim diam vulputate ut pharetra sit. Nisi vitae suscipit tellus mauris a. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Elit at imperdiet dui accumsan sit amet. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Fames ac turpis egestas sed tempus urna et pharetra. Mattis enim ut tellus elementum sagittis vitae et. Massa tincidunt nunc pulvinar sapien et ligula. Urna nec tincidunt praesent semper feugiat nibh sed. Diam vulputate ut pharetra sit amet aliquam.Egestas sed tempus urna et pharetra pharetra massa. Pellentesque habitant morbi tristique senectus et netus. Et tortor at risus viverra adipiscing. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam maecenas ultricies mi eget mauris pharetra et. Malesuada fames ac turpis egestas maecenas pharetra. Sed sed risus pretium quam. Id aliquet lectus proin nibh nisl. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Sed felis eget velit aliquet sagittis id consectetur. Vel fringilla est ullamcorper eget nulla facilisi etiam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Phasellus faucibus scelerisque eleifend donec. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Leo in vitae turpis massa. Etiam sit amet nisl purus in. In dictum non consectetur a erat nam at lectus. Vulputate sapien nec sagittis aliquam.Porttitor eget dolor morbi non arcu risus quis varius quam. Dui faucibus in ornare quam viverra orci. Tincidunt vitae semper quis lectus. Risus ultricies tristique nulla aliquet enim tortor. Tincidunt id aliquet risus feugiat in ante. Commodo viverra maecenas accumsan lacus vel. Non enim praesent elementum facilisis leo vel fringilla. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Aenean euismod elementum nisi quis eleifend quam adipiscing. Orci nulla pellentesque dignissim enim. Id nibh tortor id aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Sit amet nisl purus in mollis nunc. Sollicitudin tempor id eu nisl nunc mi."
    },
    
]

var idata = [
    
    {
        name:"Hair Form",
        url:"https://www.lakmesalon.in/sk-eu/content/dam/brands/lakme/india/1425055-hair-form.jpg.rendition.380.380.jpg",
        description:"Reverse The Damage Of Chemicals And Pollution With The Power Of Proteins. Restore Your Hair, Making It Frizz-Free, Manageable And Full Of Health. "
        
    },{
        name:"Hair Color",
        url:"https://images.pexels.com/photos/2799605/pexels-photo-2799605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:"Mix, Match, Layer Or Blend. Dress Up Your Hair With Some Stunning Hues And Shades To Look Ramp Ready."
        
    },{
        name:"Pedicure",
        url:"https://images.pexels.com/photos/161737/pedicure-massage-therapist-spa-161737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Aliquet nibh praesent tristique magna sit amet. Quis enim lobortis scelerisque fermentum. Donec adipiscing tristique risus nec. Dictumst quisque sagittis purus sit. Mattis nunc sed blandit libero volutpat sed. Pellentesque dignissim enim sit amet venenatis urna cursus. Ultrices in iaculis nunc sed."
        
    },{
        name:"Lorem ipsum",
        url:"https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Aliquet nibh praesent tristique magna sit amet. Quis enim lobortis scelerisque fermentum. Donec adipiscing tristique risus nec. Dictumst quisque sagittis purus sit. Mattis nunc sed blandit libero volutpat sed. Pellentesque dignissim enim sit amet venenatis urna cursus. Ultrices in iaculis nunc sed."
        
    },{
        name:"Lorem ipsum",
        url:"https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Aliquet nibh praesent tristique magna sit amet. Quis enim lobortis scelerisque fermentum. Donec adipiscing tristique risus nec. Dictumst quisque sagittis purus sit. Mattis nunc sed blandit libero volutpat sed. Pellentesque dignissim enim sit amet venenatis urna cursus. Ultrices in iaculis nunc sed."
        
    },{
        name:"Lorem ipsum",
        url:"https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Aliquet nibh praesent tristique magna sit amet. Quis enim lobortis scelerisque fermentum. Donec adipiscing tristique risus nec. Dictumst quisque sagittis purus sit. Mattis nunc sed blandit libero volutpat sed. Pellentesque dignissim enim sit amet venenatis urna cursus. Ultrices in iaculis nunc sed."
        
    },{
        name:"Lorem ipsum",
        url:"https://images.pexels.com/photos/361754/pexels-photo-361754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Aliquet nibh praesent tristique magna sit amet. Quis enim lobortis scelerisque fermentum. Donec adipiscing tristique risus nec. Dictumst quisque sagittis purus sit. Mattis nunc sed blandit libero volutpat sed. Pellentesque dignissim enim sit amet venenatis urna cursus. Ultrices in iaculis nunc sed."
        
    },
    
]

var sdata = [
    
    {
        name:"Facial",
        image:"https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Erase The Years Off Your Face To Unveil A Sculpted, Younger Side. With Specialised Serums And Massage Techniques As Part Of This Signature Ritual, Improve The Elasticity Of Your Skin To Look Your Youthful Best. ",
        appointment:"facial",
        cost: 1450
    },    {
        name:"Hair Cut",
        image:"https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:"Be A Cut Above The Rest With Our Wide Range Of Stylish Haircuts. Trendy And Glam, Its'S Time To Show-Stop Everyday.",
        appointment:"haircut",
        cost: 400
    },    {
        name:"Hair Color",
        image:"https://images.pexels.com/photos/2799605/pexels-photo-2799605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:"Mix, Match, Layer Or Blend. Dress Up Your Hair With Some Stunning Hues And Shades To Look Ramp Ready.",
        appointment:"haircolor",
        cost: 850
    },    
    {
        name:"Make Up",
        image:"https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:"Add A Hint Of Glamour To Your Evening Look With Our Range Of Upstyles . Now Try A New Hairstyle Everyday  ",
        appointment:"makeup",
        cost: 1700
    },
    {
        name:"Nails",
        image:"https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:"Let Your Nails Flaunt Your Attitude With Quirky Patterns. Trendy Yet Versatile,There Is Nothing More Classic Than Nail-Art That Complements Your Everyday Style.  ",
        appointment:"nails",
        cost: 425
    },
    {
        name:"Manicure",
        image:"https://images.pexels.com/photos/332046/pexels-photo-332046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:"This Manicure Will Pamper Your Hands, Leaving Them De-Stressed And Visibly Groomed.",
        appointment:"manicure",
        cost: 450
    },
    {
        name:"Pedicure",
        image:"https://images.pexels.com/photos/161737/pedicure-massage-therapist-spa-161737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:"This Pedicure Will Pamper Your Feet, Leaving It De-Stressed And Visibly Groomed. ",
        appointment:"pedicure",
        cost: 550
    },
]

var tdata = [
    
    {
        author:"Sunil",
        body:"I love this salon. They provide great customer service. When they give you an appointment they make sure they are ready when you arrive.",
        rating: 5        
    },{
        author:"Shruti",
        body:"I’ve been to this salon as a bride as well as used their services for other special occasions. Their job is flawless when it comes to hair and makeup. It stays well for hours which speaks to the quality of their work. Do expect to pay more than some other places.",
        rating: 4        
    },{
        author:"Riya",
        body:"I LOVED my hair and makeup! You guys made me look like a queen. thank you so much. my husband was speechless. will come back again for other occasions. thank you again sooooo much",
        rating: 5        
    },{
        author:"Rahul",
        body:"I love this salon. They provide great customer service. When they give you an appointment they make sure they are ready when you arrive.",
        rating: 4        
    },{
        author:"Ruchika",
        body:"It was my first time getting my hair and makeup done, I really loved my hair and makeup. Whatever was done during the consultation, was what I wanted, and the wedding day it was even better, my makeup was great, and my hair was the look I was going for. They truly know what they are doing.",
        rating: 4        
    },{
        author:"Nikhil",
        body:"I have to admit, I'm a tough customer. Went and saw a stylist and couldn't be happier. Thanks for the best cut and color I've had since getting it done in Dawarka.",
        rating: 5        
    },{
        author:"Harsh",
        body:"I love this salon. They provide great customer service. When they give you an appointment they make sure they are ready when you arrive.",
        rating: 4        
    },{
        author:"Ankit",
        body:"I love this salon. They provide great customer service. When they give you an appointment they make sure they are ready when you arrive.",
        rating: 5        
    },{
        author:"Akash",
        body:"I love this salon. They provide great customer service. When they give you an appointment they make sure they are ready when you arrive.",
        rating: 3        
    },
]


var qdata = [
    {
        name:"Lorem Ipsum0",
        email:"lorem0@ipsum.com",
        phone:"9099099090",
        message:"Inquiry about bridal package"
    },{
        name:"Lorem Ipsum1",
        email:"lorem1@ipsum.com",
        phone:"9099099091",
        message:"Inquiry about bridal package"
    },{
        name:"Lorem Ipsum2",
        email:"lorem2@ipsum.com",
        phone:"9099099092",
        message:"Inquiry about bridal package"
    },{
        name:"Lorem Ipsum3",
        email:"lorem3@ipsum.com",
        phone:"9099099093",
        message:"Inquiry about bridal package"
    },{
        name:"Lorem Ipsum4",
        email:"lorem4@ipsum.com",
        phone:"9099099094",
        message:"Inquiry about bridal package"
    },
]


function seedDB(){
    Blog.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Blogs!");
        bdata.forEach(function(seed){
                Blog.create(seed, function(err, blog){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a blog");
                        blog.save();
                    }
                });
        });
    });
    
    
    Service.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed services!");
        sdata.forEach(function(seed){
                Service.create(seed, function(err, service){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a service");
                        service.save();
                    }
                });
        });
    });   
    
    
    
    Testimonial.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed testimonials!");
        tdata.forEach(function(seed){
                Testimonial.create(seed, function(err, testimonial){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a testimonial");
                        testimonial.save();
                    }
                });
        });
    });    
    
    
    
    Image.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Images!");
        idata.forEach(function(seed){
                Image.create(seed, function(err, image){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a image");
                        image.save();
                    }
                });
        });
    });
    
    Quote.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Quotes!");
        qdata.forEach(function(seed){
                Quote.create(seed, function(err, quote){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a quote");
                        quote.save();
                    }
                });
        });
    });
}

module.exports = seedDB;