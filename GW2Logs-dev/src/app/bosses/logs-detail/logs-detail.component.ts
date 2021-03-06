import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Boss } from '../../helpers/boss';
import { OnDestroy, OnChanges } from '@angular/core';

/**
 * The componement displaying the logs - DEPRECATED, use gw2raidar instend
 */
@Component({
    selector: 'app-logs-detail',
    templateUrl: './logs-detail.component.html',
    styleUrls: ['./logs-detail.component.css']
})
export class LogsDetailComponent implements OnInit, OnDestroy, OnChanges {
    /**
     * Input value, boss data
     */
    @Input() boss: Boss;
    /**
     * Observer to listen to changes in the logs' iframe
     */
    private observerMap = new Map();
    /**
     * Switch between iframe and new tab based logs
     */
    private logsTab: boolean;
    /**
     * Create a log display component
     * @param sanitizer Make sure the given html elements are secure
     */
    constructor(public sanitizer: DomSanitizer) { }

    /**
     * Todo on init
     */
    ngOnInit() {
        this.clearMutations();
        this.logsTab = localStorage.getItem('logsTab') === 'true';
    }

    /**
     * Todo on destroy
     */
    ngOnDestroy() {
        this.clearMutations();
    }

    /**
     * Todo when input changes
     */
    ngOnChanges() {
        this.clearMutations();
    }

    /**
     * Toggle the switch
     */
    toggleLogsTab() {
        this.logsTab = !this.logsTab;
        localStorage.setItem('logsTab', this.logsTab.toString());
    }

    /**
     * Listen to changes in the logs' iframe to update the height
     * @param id ID of the iframe
     * @param target Body of the iframe
     */
    observeMutations(id: string, target: HTMLElement): void {
        const frame = document.getElementById(id);
        let observer = null;
        if (!this.observerMap.has(id)) {
            observer = new MutationObserver(function () {
                frame.setAttribute('height', target.scrollHeight.toString());
            });
            this.observerMap.set(id, observer);
        }
        frame.setAttribute('height', (1.01 * target.scrollHeight).toString());

        observer = this.observerMap.get(id);

        const config = { attributes: true, childList: true, characterData: true, subtree: true };

        observer.observe(target, config);
    }

    /**
     * Empty the observer
     */
    clearMutations(): void {
        const _this = this;
        this.observerMap.forEach(function (observer, id, map) {
            _this.stopObserveMutations(id);
        });
    }

    /**
     * Stop listening to given id
     * @param id ID of the iframe
     */
    stopObserveMutations(id: string): void {
        if (this.observerMap.has(id)) {
            this.observerMap.get(id).disconnect();
            this.observerMap.delete(id);
        }
    }

    /**
     * Display the given log
     * @param log Log data
     */
    display(log: { id: string, date: string, url: string }): void {
        if (this.logsTab) {
            window.open(log.url, '_blank');
        } else {
            const frameID = log.id;
            const frame = <HTMLIFrameElement>document.getElementById(frameID);
            if (!frame) {
                return;
            }
            const init = frame.getAttribute('src');
            if (init === 'about:blank') {
                frame.style.display = 'block';
                frame.setAttribute('src', log.url);
                frame.setAttribute('width', '1550px');
                frame.setAttribute('height', '50');
                frame.setAttribute('frameborder', '3');
                // init the button
                frame.onload = () => this.observeMutations(frameID, frame.contentDocument.body);
            } else {
                frame.style.display = (frame.style.display === 'block') ? 'none' : 'block';
                if (frame.style.display !== 'block') {
                    this.stopObserveMutations(frameID);
                } else {
                    this.observeMutations(frameID, frame.contentDocument.body);
                }
            }
        }

    }

}
