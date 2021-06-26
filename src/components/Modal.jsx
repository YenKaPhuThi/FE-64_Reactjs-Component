import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { img, title, desc } = this.props.productDetail;

    return (
      <div
        class="modal fade"
        id="modalId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{title}</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
                <img src={img} className="img-fluid" alt="Product image" />
              </div>
              <p><strong>{title}</strong></p>
              <p>{desc}</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
