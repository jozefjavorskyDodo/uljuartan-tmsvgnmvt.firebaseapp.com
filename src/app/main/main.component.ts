

import { Component } from "@angular/core";


@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})


export class MainComponent {


  subs_coloring(): void {
    <string>(String("use strict"));
    try {
      var sub_00: any = document.querySelectorAll(<string>(String(".sub00")));
      var sub_11: any = document.querySelectorAll(<string>(String(".sub11")));
      var sub_01: any = document.querySelectorAll(<string>(String(".sub01")));
      var sub_20: any = document.querySelectorAll(<string>(String(".sub20")));
      var sub_10: any = document.querySelectorAll(<string>(String(".sub10")));
      var sub_21: any = document.querySelectorAll(<string>(String(".sub21")));
      [...sub_00, ...sub_11].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(String("rgba(244, 67, 54, 1)"));
      });
      [...sub_01, ...sub_20].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(String("rgba(105, 240, 174, 1)"));
      });
      [...sub_10, ...sub_21].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(String("rgba(123, 31, 162, 1)"));
      });
    } catch (err_1) {
      if (err_1) {
        console.clear();
        console.log(err_1);
      };
    };
  };


  rows_coloring(): void {
    <string>(String("use strict"));
    try {
      var y_0: any = document.querySelectorAll(<string>(String(".y0")));
      var y_1: any = document.querySelectorAll(<string>(String(".y1")));
      var y_2: any = document.querySelectorAll(<string>(String(".y2")));
      var y_3: any = document.querySelectorAll(<string>(String(".y3")));
      var y_4: any = document.querySelectorAll(<string>(String(".y4")));
      var y_5: any = document.querySelectorAll(<string>(String(".y5")));
      [...y_0, ...y_3].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(String("rgba(244, 67, 54, 1)"));
      });
      [...y_1, ...y_4].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(String("rgba(105, 240, 174, 1)"));
      });
      [...y_2, ...y_5].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(String("rgba(123, 31, 162, 1)"));
      });
    } catch (err_2) {
      if (err_2) {
        console.clear();
        console.log(err_2);
      };
    };
  };


  cols_coloring(): void {
    <string>(String("use strict"));
    try {
      var x_0: any = document.querySelectorAll(<string>(String(".x0")));
      var x_1: any = document.querySelectorAll(<string>(String(".x1")));
      var x_2: any = document.querySelectorAll(<string>(String(".x2")));
      var x_3: any = document.querySelectorAll(<string>(String(".x3")));
      var x_4: any = document.querySelectorAll(<string>(String(".x4")));
      var x_5: any = document.querySelectorAll(<string>(String(".x5")));
      [...x_0, ...x_3].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(String("rgba(244, 67, 54, 1)"));
      });
      [...x_1, ...x_4].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(String("rgba(105, 240, 174, 1)"));
      });
      [...x_2, ...x_5].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(String("rgba(123, 31, 162, 1)"));
      });
    } catch (err_3) {
      if (err_3) {
        console.clear();
        console.log(err_3);
      };
    };
  };


  null_coloring(): void {
    <string>(String("use strict"));
    try {
      var _tds_: any = document.querySelectorAll(<string>(String("td")));
      [..._tds_].forEach((cell) => {
        cell.style.borderColor = <string>(String("rgba(122, 122, 122, 1)"));
      });
    } catch (err_4) {
      if (err_4) {
        console.clear();
        console.log(err_4);
      };
    };
  };


  input_fT_tFunc(): void {
    <string>(String("use strict"));
    try {
      var which_branch: number = <number>(Number(
        Math.floor(Math.random() * <number>(Number(2)))
      ));
      var _tds_: any = document.querySelectorAll(<string>(String("td")));
      var x_vals: number[] = [];
      var print_vals: number[] = [];
      [..._tds_].forEach((cubicle) => {
        cubicle.innerHTML = <string>(String('0'));
        cubicle.style.color = <string>(String("rgba(0, 0, 0, 1)"));
      });
      if (
        <number>(Number(which_branch))
        ===
        <number>(Number(0))
      ) {
        x_vals.push(<number>(Number(Math.floor(Math.random() * <number>(Number(3))))));
        x_vals.push(<number>(Number(
          Math.floor(Math.random() * <number>(Number(3))) + <number>(Number(3))
        )));
        while (
          <number>(Number(x_vals.length))
          <
          <number>(Number(3))
        ) {
          var new_val: number = <number>(Number(
            Math.floor(Math.random() * <number>(Number(3)))
          ));
          if (
            <boolean>(Boolean(x_vals.includes(<number>(Number(new_val)))))
            ===
            <boolean>(Boolean(false))
          ) {
            x_vals.push(<number>(Number(new_val)));
          };
        };
        while (
          <number>(Number(x_vals.length))
          <
          <number>(Number(4))
        ) {
          var new_val: number = <number>(Number(
            Math.floor(Math.random() * <number>(Number(3))) + <number>(Number(3))
          ));
          if (
            <boolean>(Boolean(x_vals.includes(<number>(Number(new_val)))))
            ===
            <boolean>(Boolean(false))
          ) {
            x_vals.push(<number>(Number(new_val)));
          };
        };
        while (
          <number>(Number(x_vals.length))
          <
          <number>(Number(5))
        ) {
          var new_val: number = <number>(Number(
            Math.floor(Math.random() * <number>(Number(3)))
          ));
          if (
            <boolean>(Boolean(x_vals.includes(<number>(Number(new_val)))))
            ===
            <boolean>(Boolean(false))
          ) {
            x_vals.push(<number>(Number(new_val)));
          };
        };
        while (
          <number>(Number(x_vals.length))
          <
          <number>(Number(6))
        ) {
          var new_val: number = <number>(Number(
            Math.floor(Math.random() * <number>(Number(3))) + <number>(Number(3))
          ));
          if (
            <boolean>(Boolean(x_vals.includes(<number>(Number(new_val)))))
            ===
            <boolean>(Boolean(false))
          ) {
            x_vals.push(<number>(Number(new_val)));
          };
        };
      } else {
        x_vals.push(<number>(Number(
          Math.floor(Math.random() * <number>(Number(3))) + <number>(Number(3))
        )));
        x_vals.push(<number>(Number(Math.floor(Math.random() * <number>(Number(3))))));
        while (
          <number>(Number(x_vals.length))
          <
          <number>(Number(3))
        ) {
          var new_val: number = <number>(Number(
            Math.floor(Math.random() * <number>(Number(3))) + <number>(Number(3))
          ));
          if (
            <boolean>(Boolean(x_vals.includes(<number>(Number(new_val)))))
            ===
            <boolean>(Boolean(false))
          ) {
            x_vals.push(<number>(Number(new_val)));
          };
        };
        while (
          <number>(Number(x_vals.length))
          <
          <number>(Number(4))
        ) {
          var new_val: number = <number>(Number(
            Math.floor(Math.random() * <number>(Number(3)))
          ));
          if (
            <boolean>(Boolean(x_vals.includes(<number>(Number(new_val)))))
            ===
            <boolean>(Boolean(false))
          ) {
            x_vals.push(<number>(Number(new_val)));
          };
        };
        while (
          <number>(Number(x_vals.length))
          <
          <number>(Number(5))
        ) {
          var new_val: number = <number>(Number(
            Math.floor(Math.random() * <number>(Number(3))) + <number>(Number(3))
          ));
          if (
            <boolean>(Boolean(x_vals.includes(<number>(Number(new_val)))))
            ===
            <boolean>(Boolean(false))
          ) {
            x_vals.push(<number>(Number(new_val)));
          };
        };
        while (
          <number>(Number(x_vals.length))
          <
          <number>(Number(6))
        ) {
          var new_val: number = <number>(Number(
            Math.floor(Math.random() * <number>(Number(3)))
          ));
          if (
            <boolean>(Boolean(x_vals.includes(<number>(Number(new_val)))))
            ===
            <boolean>(Boolean(false))
          ) {
            x_vals.push(<number>(Number(new_val)));
          };
        };
      };
      while (
        <number>(Number(print_vals.length))
        <
        <number>(Number(6))
      ) {
        var new_prnt_val: number = <number>(Number(
          Math.floor(Math.random() * <number>(Number(6))) + <number>(Number(1))
        ));
        if (
          <boolean>(Boolean(print_vals.includes(new_prnt_val)))
          ===
          <boolean>(Boolean(false))
        ) {
          print_vals.push(<number>(Number(new_prnt_val)))
        };
      };
      for (
        var yterator: number = <number>(Number(0));
        yterator <= <number>(Number(5));
        yterator += <number>(Number(1))
      ) {
        var ___cell: any = document.getElementById(<string>(String(
          `-${<string>(String(yterator))}-${<string>(String(x_vals[<number>(Number(yterator))]))}-`
        )));
        ___cell.innerHTML = <string>(String(print_vals[<number>(Number(yterator))]));
        ___cell.style.color = <string>(String("rgba(244, 244, 244, 1)"));
      };
      this.fT_tFunc_output();
      {
        var __which_branchie: boolean = <boolean>Boolean(true);
        var _cellulars_: any = document.querySelectorAll(<string>(String("td")));
        for (
          var indx_iter: number = <number>(Number(0));
          indx_iter <= <number>(Number(35));
          indx_iter += <number>(Number(1))
        ) {
          if (
            <string>(String(_cellulars_[<number>(Number(indx_iter))].style.color))
            ===
            <string>(String("rgb(0, 0, 0)"))
          ) {
            __which_branchie = <boolean>Boolean(false);
          };
        };
        if (
          <boolean>(Boolean(__which_branchie))
          ===
          <boolean>(Boolean(false))
        ) {
          {
            this.input_fT_tFunc();
          };
        } else {
          var generate_bttn: any = document.querySelector(<string>(String("#generate-bttn")));
          var solve_bttn: any = document.querySelector(<string>(String("#solve-bttn")));
          var _CLLS_: any = document.querySelectorAll("td");
          var which_yndexes: number[] = [];
          while (
            <number>(Number(which_yndexes.length))
            <
            <number>(Number(18))
          ) {
            var new_tryout_val: number = Math.floor(Math.random() * 36);
            if (
              <boolean>(Boolean(which_yndexes.includes(new_tryout_val)))
              ===
              <boolean>(Boolean(false))
            ) {
              which_yndexes.push(<number>(Number(new_tryout_val)));
            };
          };
          for (let subitem in which_yndexes) {
            _CLLS_[<number>(Number(which_yndexes[<number>(Number(subitem))]))].style.color = <string>(
              String("rgb(0, 0, 0)")
            );
          };
          generate_bttn.style.visibility = <string>(String("hidden"));
          solve_bttn.style.visibility = <string>(String("visible"));
        };
      };
    } catch (err_5) {
      if (err_5) {
        console.clear();
        console.log(err_5);
      };
    };
  };


  fT_tFunc_output(): void {
    <string>(String("use strict"));
    try {
      var _tds_____: any = document.querySelectorAll(<string>(String("td")));
      for (
        var _xterator_: number = <number>(Number(0));
        _xterator_ <= <number>(Number(35));
        _xterator_ += <number>(Number(1))
      ) {
        if (
          _tds_____[<number>(Number(_xterator_))].style.color
          ===
          <string>(String("rgb(244, 244, 244)"))
        ) {
          continue;
        } else {
          var its_subs: any = document.querySelectorAll(
            <string>(String('.'))
            +
            <string>(String(
              _tds_____[<number>(Number(_xterator_))].getAttribute(<string>(String("class")))
            )).split(<string>(String(' ')))[<number>(Number(0))]
          );
          var its_ys: any = document.querySelectorAll(
            <string>(String('.'))
            +
            <string>(String(
              _tds_____[<number>(Number(_xterator_))].getAttribute(<string>(String("class")))
            )).split(<string>(String(' ')))[<number>(Number(1))]
          );
          var its_xs: any = document.querySelectorAll(
            <string>(String('.'))
            +
            <string>(String(
              _tds_____[<number>(Number(_xterator_))].getAttribute(<string>(String("class")))
            )).split(<string>(String(' ')))[<number>(Number(2))]
          );
          var subs_vals: number[] | string[] | any[] = [];
          var ys_vals: number[] | string[] | any[] = [];
          var xs_vals: number[] | string[] | any[] = [];
          for (
            var _iy_: number = <number>(Number(0));
            _iy_ <= <number>(Number(5));
            _iy_ += <number>(Number(1))
          ) {
            subs_vals.push(<number>(Number(its_subs[<number>(Number(_iy_))].innerHTML)));
            ys_vals.push(<number>(Number(its_ys[<number>(Number(_iy_))].innerHTML)));
            xs_vals.push(<number>(Number(its_xs[<number>(Number(_iy_))].innerHTML)));
          };
          for (
            var new_pos_int: number = <number>(Number(1));
            new_pos_int <= <number>(Number(6));
            new_pos_int += <number>(Number(1))
          ) {
            if (
              (
                <boolean>(Boolean(subs_vals.includes(<number>(Number(new_pos_int)))))
                ===
                <boolean>(Boolean(false))
              )
              &&
              (
                <boolean>(Boolean(ys_vals.includes(<number>(Number(new_pos_int)))))
                ===
                <boolean>(Boolean(false))
              )
              &&
              (
                <boolean>(Boolean(xs_vals.includes(<number>(Number(new_pos_int)))))
                ===
                <boolean>(Boolean(false))
              )
            ) {
              _tds_____[<number>(Number(_xterator_))].innerHTML = <string>(
                String(<number>(Number(new_pos_int)))
              );
              _tds_____[<number>(Number(_xterator_))].style.color = <string>(
                String("rgb(244, 244, 244)")
              );
            };
          };
        };
      };
    } catch (err_6) {
      if (err_6) {
        console.clear();
        console.log(err_6);
      };
    };
  };


  rerender_UI_state(): void {
    <string>(String("use strict"));
    try {
      var generate_bttn: any = document.querySelector(<string>(String("#generate-bttn")));
      var solve_bttn: any = document.querySelector(<string>(String("#solve-bttn")));
      var _cubicles_: any = document.querySelectorAll(<string>(String("td")));
      [..._cubicles_].forEach((_c_) => {
        _c_.style.color = <string>(String("rgb(244, 244, 244)"));
      });
      generate_bttn.style.visibility = <string>(String("visible"));
      solve_bttn.style.visibility = <string>(String("hidden"));
    } catch (err_7) {
      if (err_7) {
        console.clear();
        console.log(err_7);
      };
    };
  };

};
