

import { TestBed } from "@angular/core/testing";
import { FetchApiCallService } from "./fetch-api-call.service";


describe("FetchApiCallService", () => {
  let service: FetchApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchApiCallService);
  });

  it("should be created", () => { expect(service).toBeTruthy(); });
});
