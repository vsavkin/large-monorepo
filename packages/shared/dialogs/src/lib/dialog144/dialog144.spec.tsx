import { render } from '@testing-library/react';

import Dialog144 from './dialog144';

describe('Dialog144', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog144 />);
    expect(baseElement).toBeTruthy();
  });
});
