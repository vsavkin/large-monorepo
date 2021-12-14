import { render } from '@testing-library/react';

import Dialog64 from './dialog64';

describe('Dialog64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog64 />);
    expect(baseElement).toBeTruthy();
  });
});
