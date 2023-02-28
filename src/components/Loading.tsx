import React from "react";

const Loading = (props: any) => {
    return (
        <div className=" w-full min-h-[90vh] z-50  flex flex-col items-center justify-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            {!props?.text ? (
                <h2 className="text-center text-white text-xl font-semibold">
                    Loading...
                </h2>
            ) : (
                <p className="w-full sm:w-1/3 text-center text-white">
                    {props?.text ?? "This may take a few seconds, please wait."}
                </p>
            )}
        </div>
    );
};

export default Loading;
