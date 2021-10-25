import React from "react";

const AboutUs = () => {
  return (
    <div className="container">
      <div className=" py-5">
        {/* section heading */}
        <h1 className=" text-center text-warning">About Us</h1>
        <div className="row mt-5">
          {/* section content part */}
          <div className="col-6">
            <h3 className="text-center">Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
              beatae enim. Quibusdam voluptas numquam dignissimos natus
              distinctio, quos, iure facere, repellat ullam porro deserunt odit
              aliquid doloremque cum deleniti optio excepturi! Optio et
              veritatis atque architecto qui blanditiis odit. Tempora laudantium
              corporis accusamus quisquam vitae asperiores sit autem cum amet
              beatae, eligendi cupiditate alias numquam cumque, ipsam nihil vel?
              Dicta amet magnam aliquid? Laborum provident porro facere animi
              ea, voluptatum repudiandae alias maxime repellat, omnis eos quam
              voluptatibus, quibusdam nam expedita enim necessitatibus aut
              reiciendis ad harum inventore. Recusandae suscipit temporibus
              architecto? Amet praesentium quia quod ipsa ipsam quaerat nemo,
              expedita et! Explicabo nam, voluptate eius quasi unde ipsam
              quibusdam rerum sequi accusamus beatae aspernatur consectetur
              temporibus! Itaque ipsa repellendus voluptatum aperiam aliquam.
              Ipsam commodi sunt asperiores alias eum corrupti laboriosam ullam
              nostrum reiciendis voluptatibus placeat iusto neque totam
              assumenda voluptates molestias facere temporibus in odit ducimus,
              repellat error? Perferendis dolores impedit ipsum at repudiandae
              aut saepe laboriosam. Odit quos aperiam veritatis quibusdam
              obcaecati illo aut possimus consectetur eveniet Recusandae
              suscipit temporibus architecto? Amet praesentium quia quod ipsa
              ipsam quaerat nemo, expedita et! Explicabo nam.
            </p>
          </div>
          {/* section image part */}
          <div className="col-6 mt-5">
            <img
              src="https://images.unsplash.com/photo-1480700014161-b404b4503a4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
