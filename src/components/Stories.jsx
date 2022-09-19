import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Stories() {
  return (
    <div className="relative mb-5 bg-white">
        <div className="absolute left-3 top-1/2">
            <a className="bg-white text-gray-400 flex items-center justify-center rounded-full text-sm w-6 h6 shadow-md cursor-pointer" href="">
            <FontAwesomeIcon icon="chevron-left"/>
            
            </a>

        </div>
        <div className="absolute right-3 top-1/2">
            <a className="bg-white text-gray-400 flex items-center justify-center rounded-full text-sm w-6 h6 shadow-md cursor-pointer" href="">
            <FontAwesomeIcon icon="chevron-right"/>
            
            </a>

        </div>
    
    <ul className="border rounded-lg border-slate-200 p-4 flex space-x-4 overflow-x-auto">
        <li className="flex flex-col items-center space-y-1">
            <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                <a className="block bg-white p-0.5 rounded-full cursor pointer">
                    <img 
                    className='object-cover rounded-full w-16 h-16'
                     src="https://picsum.photos/300.jpg" />
                </a>
            </div>
            <a className="cursor-pointer" href="">
                <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                    Michi.guidetti
                </div>
            </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
            <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                <a className="block bg-white p-0.5 rounded-full cursor pointer">
                    <img 
                    className='object-cover rounded-full w-16 h-16'
                     src="https://picsum.photos/200.jpg" />
                </a>
            </div>
            <a className="cursor-pointer" href="">
                <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                    daniele.d19
                </div>
            </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
            <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                <a className="block bg-white p-0.5 rounded-full cursor pointer">
                    <img 
                    className='object-cover rounded-full w-16 h-16'
                     src="https://picsum.photos/700.jpg" />
                </a>
            </div>
            <a className="cursor-pointer" href="">
                <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                    diane.pucci
                </div>
            </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
            <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                <a className="block bg-white p-0.5 rounded-full cursor pointer">
                    <img 
                    className='object-cover rounded-full w-16 h-16'
                     src="https://i.postimg.cc/xdYSm2r1/0583342-B-762-B-43-B3-8-F8-D-F690-ECE29956.jpg" />
                </a>
            </div>
            <a className="cursor-pointer" href="">
                <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                    antoespada
                </div>
            </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
            <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                <a className="block bg-white p-0.5 rounded-full cursor pointer">
                    <img 
                    className='object-cover rounded-full w-16 h-16'
                     src="https://i.postimg.cc/FH041KB6/4-EA2-F92-B-4088-41-C3-AD0-F-BEBC9-F865-D9-F.jpg" />
                </a>
            </div>
            <a className="cursor-pointer" href="">
                <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                    espuci.Ianed
                </div>
            </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
            <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                <a className="block bg-white p-0.5 rounded-full cursor pointer">
                    <img 
                    className='object-cover rounded-full w-16 h-16'
                     src="https://picsum.photos/600.jpg" />
                </a>
            </div>
            <a className="cursor-pointer" href="">
                <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                    Moqa.max
                </div>
            </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
            <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                <a className="block bg-white p-0.5 rounded-full cursor pointer">
                    <img 
                    className='brightness-125 object-cover rounded-full w-16 h-16'
                     src="https://picsum.photos/800.jpg" />
                </a>
            </div>
            <a className="cursor-pointer" href="">
                <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                    OrgaBorg
                </div>
            </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
            <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                <a className="block bg-white p-0.5 rounded-full cursor pointer">
                    <img 
                    className='brightness-200 rounded-full w-16 h-16'
                     src="https://picsum.photos/400.jpg" />
                </a>
            </div>
            <a className="cursor-pointer" href="">
                <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                    Booger
                </div>
            </a>
        </li>
    </ul>
    </div>
    );
}

export default Stories