import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items", "form"];

  connect() {
    console.log(this.itemsTarget, this.formTarget);
  }

  send(event) {
    event.preventDefault();

    fetch(this.formTarget.action, {
      method: "post",
      body: new FormData(this.formTarget),
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.review) {
          this.itemsTarget.insertAdjacentHTML("beforeend", data.review);
        }
        this.formTarget.outerHTML = data.form;
      });
  }
}
