import { render } from '@testing-library/react';

import Dialog53 from './dialog53';

describe('Dialog53', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog53 />);
    expect(baseElement).toBeTruthy();
  });
});
