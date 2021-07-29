# gatsby-dynamic-image-component
Generates dynamically diffrent images for desktop and mobile view, depending on the "relativeDirectory"-path.


## How to use ## 
Just copy and paste the component inside of your component-folder.<br/>
Maybe you need to change some path inside the GraphQL query(e.g. relativeDirectory)

Create the following folder structure inside the images-folder:<br/>

    images
    ├── desktopImages
    └── mobileImages
  
Inside of your parent-component:<br />
```
import Image from "./common/RenderDynamicImage"

{...}

<Image
 alt="alternative_text"
 filenameDesktop={name_of_desktop_image.png}
 filenameMobile={name_of_mobile_image.png}
 style={{your_style}}
/>

{...}
```



