import React from "react";

const Modal = (props) => {
  //   console.log(props.modalData);
  const {
    id,
    image_link,
    integrations,
    tool_name,
    features,
    pricing,
    accuracy,
    description,
    input_output_examples,
  } = props?.modalData;
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 ">
            <div className="card-body">
              <h2 className="card-title">{description}</h2>
              <div className="grid grid-cols-3 gap-2">
                {pricing &&
                  pricing.map((p, i) => (
                    <div
                      className="border p-2 bg-red-100 text-black rounded"
                      key={i}
                    >
                      <p>{p.plan}</p>
                      <p>{p.price}</p>
                    </div>
                  ))}
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl font-bold">Features</h1>
                  {Object.values(features || {}).map((feature, index) => (
                    <p key={index}>{feature.feature_name}</p>
                  ))}
                </div>
                <div>
                  <h1 className="text-xl font-bold">Integrations</h1>
                  {integrations
                    ? integrations.map((i, index) => <p key={index}>{i}</p>)
                    : "No data Found"}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute right-0 mt-2 mr-2">
                {accuracy?.score && (
                  <div className="badge badge-warning gap-2">
                    {accuracy?.score && accuracy?.score}% accuracy
                  </div>
                )}
              </div>
              <figure className="w-full">
                <img
                  className="w-full"
                  src={image_link && image_link[0]}
                  alt="Album"
                />
              </figure>
              <p>
                {input_output_examples && input_output_examples[0]
                  ? input_output_examples[0].input
                  : "No! Not Yet! Take a break!!!"}
              </p>
              <p>
                {input_output_examples && input_output_examples[0]
                  ? input_output_examples[0].output
                  : "No! Not Yet! Take a break!!!"}
              </p>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
