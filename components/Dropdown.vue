<template>
  <div class="dropdown">
    <label for="dropdown__label">{{ label }}</label>
    <details id="dropdown_select" class="dropdown__container">
      <summary class="dropdown__summary">Filtre</summary>
      <ul class="dropdown__list">
        <li class="dropdown__option" v-for="item in items" :key="item.id">
          <input
            :id="item.id"
            type="radio"
            :name="item.name"
            :value="item.value"
          />
          <label class="dropdown__option--label" :for="item.id">
            {{ item.name }}
          </label>
        </li>
      </ul>
    </details>
  </div>
</template>
<style lang="scss" scoped>
.dropdown {
  background-color: #fff;
  position: relative;
  margin-right: 16px;
  width: 250px;
  &:last-of-type {
    margin-right: 0;
  }
  &__label {
    font-size: 21px;
    margin-bottom: 12px;
  }
  &__container {
    border-radius: 12px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    border: 3px solid #dcdcde;
    &[open] {
      summary {
        background-color: #ccc;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABASURBVDhPY/z//z8DpYAJSlMERpohjY2NBEMeryEwAwgZhNMQdI34DMJqCC4NuMQxDCHkdGzyoykWEwwrQxgYAAfNHK0786NlAAAAAElFTkSuQmCC")
          right no-repeat;
        background-position: 97% 9px;
      }
    }
    &:hover {
      background-color: #ebebeb;
      border-color: #adadad;
    }
  }

  summary::-webkit-details-marker {
    display: none;
  }
  summary {
    cursor: pointer;
    text-transform: capitalize;
    padding: 8px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAIAAAC0D9CtAAAABnRSTlMA/wD/AP83WBt9AAAAQ0lEQVR4nO1SOQoAMAiLpf9WX56u0mrB3WzmIAoKSTSxuoHJAAB2HNy98qlq3hOFD3/v9sZeJrknmvJmFjCzSpL5NxwKVUNZtBfqyQAAAABJRU5ErkJggg==")
      right no-repeat;
    background-position: 97% 8px;
  }
  &__list {
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    left: 0;
    top: 58px;
    list-style-type: none;
    padding: 2px 0;
    margin: 0;
    border: 1px solid #ccc;
    width: 250px;
    input {
      opacity: 0;
    }
  }
  &__option {
    border-radius: 4px;
    margin: 0 2px;
    &:hover {
      background-color: #ebebeb;
    }
    &--label {
      padding: 12px 0;
      display: inline-block;
      min-width: 200px;
    }
  }
}
</style>
<script>
export default {
  props: {
    items: {
      type: Array
    },
    label: {
      type: String,
      default: "Sort by:"
    }
  },
  mounted() {
    var that = this;
    class detailSelect {
      constructor(container) {
        this.container = document.querySelector(container);
        this.options = document.querySelectorAll(
          `${container} > .dropdown__list > .dropdown__option input`
        );
        this.options.forEach(opt => {
          if(opt.id == that.$store.getters.getOrder) {
            this.setChecked(opt);
          }
        });
        this.value = this.container.querySelector("summary").textContent;
        this.mouseDown = false;
        this._addEventListeners();
        this._setAria();
        this.updateValue();
      }

      // Private function to set event listeners
      _addEventListeners() {
        this.options.forEach(opt => {
          opt.addEventListener("click", e => {
            that.$emit("changeOrder", e.target.id);
            this.setValue(e.target);
            this.mouseDown = false;
            this.container.removeAttribute("open");
          });
        });

        this.container.addEventListener("keyup", e => {
          const keycode = e.which;
          const current = [...this.options].indexOf(
            this.container.querySelector(".active")
          );
          switch (keycode) {
            case 27: // ESC
              this.container.removeAttribute("open");
              break;
            case 35: // END
              e.preventDefault();
              if (!this.container.open) this.container.setAttribute("open", "");
              this.setChecked(
                this.options[this.options.length - 1].querySelector("input")
              );
              break;
            case 36: // HOME
              e.preventDefault();
              if (!this.container.open) this.container.setAttribute("open", "");
              this.setChecked(this.options[0].querySelector("input"));
              break;
            case 38: // UP
              e.preventDefault();
              if (!this.container.open) this.container.setAttribute("open", "");
              this.setChecked(
                this.options[current > 0 ? current - 1 : 0].querySelector(
                  "input"
                )
              );
              break;
            case 40: // DOWN
              e.preventDefault();
              if (!this.container.open) this.container.setAttribute("open", "");
              this.setChecked(
                this.options[
                  current < this.options.length - 1
                    ? current + 1
                    : this.options.length - 1
                ].querySelector("input")
              );
              break;
          }
        });
      }

      _setAria() {
        this.container.setAttribute("aria-haspopup", "listbox");
        const selectBox = this.container.querySelector(".dropdown__list");
        selectBox.setAttribute("role", "listbox");
        selectBox.querySelector("[type=radio]").setAttribute("role", "option");
      }

      updateValue() {
        const that = this.container.querySelector("input:checked");
        if (!that) return;
        this.setValue(that);
      }

      setChecked(that) {
        that.checked = true;
        this.setValue(that);
      }

      setValue(that) {
        if (this.value == that.value) return;

        this.container.querySelector("summary").textContent =
          that.parentNode.textContent;
        this.value = that.value;

        this.options.forEach(opt => {
          opt.classList.remove("active");
        });
        that.parentNode.classList.add("active");

        this.container.dispatchEvent(new Event("change"));
      }
    }

    const details = new detailSelect("#dropdown_select");

    $("details").scroll(function(e) {
      e.stopPropagation();
    });
  }
};
</script>
