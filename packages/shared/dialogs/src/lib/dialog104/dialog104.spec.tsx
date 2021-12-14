import { render } from '@testing-library/react';

import Dialog104 from './dialog104';

describe('Dialog104', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog104 />);
    expect(baseElement).toBeTruthy();
  });
});
