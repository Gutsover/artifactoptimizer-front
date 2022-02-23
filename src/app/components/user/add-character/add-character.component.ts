import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import charactersData from './../../../data/charactersData.json';
import { CharactersInterface } from './../../../interfaces/characters-interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
})
export class AddCharacterComponent implements OnInit {
  genshindb = require('genshin-db');
  characters: CharactersInterface[] = charactersData;

  characterForm: any = FormGroup;

  characterSelected: any;
  characterSelectedName: string = '';
  characterSelectedRarity: number = 0;
  characterSelectedPic: string = '';
  characterFiltered: any;

  charactersCryoList = this.genshindb.characters('cryo', {
    matchCategories: true,
  });
  charactersAnemoList = this.genshindb.characters('anemo', {
    matchCategories: true,
  });
  charactersPyroList = this.genshindb.characters('pyro', {
    matchCategories: true,
  });
  charactersGeoList = this.genshindb.characters('geo', {
    matchCategories: true,
  });
  charactersElectroList = this.genshindb.characters('electro', {
    matchCategories: true,
  });
  charactersHydroList = this.genshindb.characters('hydro', {
    matchCategories: true,
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.characterForm = this.fb.group({
      characterControl: [''],
    });
    // console.log(this.genshindb.characters('hutao'));
    this.characterForm
      .get('characterControl')
      .valueChanges.subscribe((e: any) => {
        this.onCharacterSelected(e);
      });
  }

  onCharacterSelected(value: string) {
    this.characterSelected = this.genshindb.characters(value);
    this.characterSelectedName = this.genshindb.characters(value).name;
    this.characterSelectedRarity = this.genshindb.characters(value).rarity;
    this.characterSelectedPic = this.genshindb.characters(value).images.cover1;
    this.characterFiltered = charactersData.filter(
      (Character: any) => Character.name === value
    );
  }
}
