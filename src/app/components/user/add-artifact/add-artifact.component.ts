import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ArtifactsInterface } from "src/app/interfaces/artifacts-interface";
import artifactsData from "./../../../data/artifactsData.json";

@Component({
  selector: "app-add-artifact",
  templateUrl: "./add-artifact.component.html",
  styleUrls: ["./add-artifact.component.scss"],
})
export class AddArtifactComponent implements OnInit {
  artifacts: ArtifactsInterface[] = artifactsData;
  artifactForm: any = FormGroup;

  keysArtifactSelected: any;
  keyWord: string = "";
  typeSetArtifactSelected: any;
  typePieceArtifactSelected: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.artifactForm = this.fb.group({
      setArtifactControl: [""],
      pieceArtifactControl: [""],
    });

    this.artifactForm
      .get("setArtifactControl")
      .valueChanges.subscribe((e: any) => {
        this.onTypeSetArtifactSelected(e);
      });
    this.artifactForm
      .get("pieceArtifactControl")
      .valueChanges.subscribe((e: any) => {
        this.onTypePieceArtifactSelected(e);
      });
  }

  onTypeSetArtifactSelected(typeSetA: string) {
    this.typeSetArtifactSelected = artifactsData.filter(
      (Artifact: any) => Artifact.setArtifactName === typeSetA
    );

    this.keysArtifactSelected = Object.keys(
      this.typeSetArtifactSelected[0]
    ).filter(
      (obj: any) =>
        obj === "flower" ||
        obj === "plume" ||
        obj === "sands" ||
        obj === "goblet" ||
        obj === "circlet"
    );
  }

  onTypePieceArtifactSelected(typePieceA: string) {
    this.keyWord = typePieceA;
    switch (typePieceA) {
      case "flower":
        this.typePieceArtifactSelected =
          this.typeSetArtifactSelected[0].flower[0];
        break;
      case "plume":
        this.typePieceArtifactSelected =
          this.typeSetArtifactSelected[0].plume[0];
        break;
      case "sands":
        this.typePieceArtifactSelected =
          this.typeSetArtifactSelected[0].sands[0];
        break;
      case "goblet":
        this.typePieceArtifactSelected =
          this.typeSetArtifactSelected[0].goblet[0];
        break;
      case "circlet":
        this.typePieceArtifactSelected =
          this.typeSetArtifactSelected[0].circlet[0];
        break;

      default:
        console.log("ERROR");
        break;
    }
  }

  sendData() {
    if (this.artifactForm.valid) {
      console.log("is OK");
    } else {
      return;
    }
  }
}
