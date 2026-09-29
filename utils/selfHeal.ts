/**
 * Self-healing locator report.
 *
 * Shape only: the CustomReporter reads HealReport objects out of test
 * attachments. A healing fixture attaches one when it retries a failed
 * selector with a candidate it derived from the accessibility tree.
 */

export interface HealReport {
    /** The selector that failed to resolve. */
    failedSelector: string;
    /** What the step was trying to do, for the report card. */
    intent: string;
    /** Candidates considered and discarded. */
    rejected: string[];
    /** Set when healing could not run at all. */
    unavailableReason?: string;
    /** The candidate that resolved and passed its check. */
    verified?: string;
}