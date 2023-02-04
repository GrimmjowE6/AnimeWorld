import React from 'react'
import"./WatchinArea.css"

const WatchinArea = () => {
    return (
        <div>
            <section className='watch-section h-100 d-flex align-items-center justify-content-center' >
                <div className="watch-area col-9 row p-0">
                <iframe className='col-md-9 col-12 m-0 p-0' width="1350" height="480" src="https://www.youtube.com/embed/LMlCN6_vUvs" title="Coming Soon Video - Free Video Placeholder" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className='episodes col-md-3 col-12 m-0 p-0 '>
                        <div className='episode col-md-12 col-3 p-2 text-center w-100' >01</div>
                    </div>
                    <button className='ep-button m-1 p-1'>PREVIUS</button>
                    <button className='ep-button ml-auto m-1 p-1'>NEXT</button>
                </div>
            </section>
        </div>
    )
}

export default WatchinArea
