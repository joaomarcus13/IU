import React, { useState, useEffect } from 'react';
import './input.css'


function Input(props) {


    function toggleIc() {
        document.querySelectorAll('.search-aside-icon').forEach(e => { e.style.display = 'block' })
        document.querySelectorAll('.search-aside-back').forEach(e => { e.style.display = 'none' })

    }

    function handle(e) {
      
        if (e.target.id !== 'input-aside') {
            toggleIc()
        }

     
    }

    useEffect(() => {
        document.addEventListener('click', handle)
    }, [])


    function toggleIcon(index, e) {
        //e.target.placeholder=''
        document.querySelectorAll('.search-aside-icon')[index].style.display = 'none'
        document.querySelectorAll('.search-aside-back')[index].style.display = 'block'
        //document.querySelectorAll('#input-aside')[index].placeholder = ''

    }

    return (

        <div className='search-aside'>
            <span className='search-aside-icon' >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
            </span>
            <span className='search-aside-back'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path></svg>
            </span>
            <input
                type='text'
                onFocus={(e) => { toggleIcon(props.index, e) }}
                //onBlur={this.placeholder=props.placeholder }
                id='input-aside'
                placeholder={props.placeholder}>

            </input>
        </div>



    )
}


export default Input