import { render } from '@testing-library/react';

import Dialog76 from './dialog76';

describe('Dialog76', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog76 />);
    expect(baseElement).toBeTruthy();
  });
});
