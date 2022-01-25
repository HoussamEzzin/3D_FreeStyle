

export const resizeRendererToDisplaySize = (renderer) =>{
    /* 
    this function checks if the renderer's canvas is not already
    the size it is being displayed as and if so set its size.
    ** drawingbuffer size : canvas's internal size (resolution)
*/
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if(needResize){
        renderer.setSize( width, height, false);
        // setSize
        // set the canvas's drawingbuffer size
    }
    return needResize;
}

