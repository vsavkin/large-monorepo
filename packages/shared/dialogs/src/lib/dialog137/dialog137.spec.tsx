import { render } from '@testing-library/react';

import Dialog137 from './dialog137';

describe('Dialog137', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog137 />);
    expect(baseElement).toBeTruthy();
  });
});
