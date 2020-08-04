import { Component, OnInit } from "@angular/core";
import { Candidate } from "src/app/models/candidate-model";
import { CandidatesService } from "../services/candidates.service";

@Component({
  selector: "app-votes",
  templateUrl: "./votes.component.html",
  styleUrls: ["./votes.component.sass"]
})
export class VotesComponent implements OnInit {
  public candidates: Candidate[];
  public totalVotes: number;
  public selectionVoteOk: String = "Ok";
  public selectionVoteFail: String = "Fail";
  public pathImages:String = "/assets/img/";

  constructor(private candidateService: CandidatesService) {}

  ngOnInit() {
    this.initCandidates();
  }

  public initCandidates(): void {

    this.candidates = this.getSessionStorage();
    
    if(this.candidates == undefined){
      this.candidateService.getCandidates().subscribe(res => {
        this.candidates = res;
      });
    }


    
  }

  public calculateVote(candidateVote: Candidate) {
    for (let index = 0; index < this.candidates.length; index++) {
      if (this.candidates[index].idCandidate == candidateVote.idCandidate) {
       
        if (candidateVote.selectionVote == this.selectionVoteOk) {
          this.candidates[index].votesOk++;
        } else if (candidateVote.selectionVote == this.selectionVoteFail) {
          this.candidates[index].votesFail++;
        }
        this.candidates[index].stateVote = true;
        break;
      }
    }

    this.saveToSessionStorage();
  }


  public voteAgain(candidateVote: Candidate) {
    for (let index = 0; index < this.candidates.length; index++) {
      if (this.candidates[index].idCandidate == candidateVote.idCandidate) {
        this.candidates[index].stateVote = false;
        this.candidates[index].selectionVote = null;
        break;
      }
    }
  }

  public calculatePercent(votesCalc:number , votesOk:number, votesFail:number):number{
    return((votesCalc * 100) / (votesOk + votesFail));
  }

  private saveToSessionStorage():void{
      var candidatesJsonString = JSON.stringify(this.candidates);
      sessionStorage.setItem('candidates', candidatesJsonString);
  }


  private getSessionStorage():Candidate[]{
    var candiatesSS = sessionStorage.getItem('candidates');
    return  <Candidate[]>JSON.parse(candiatesSS);
  }
  
  
}
