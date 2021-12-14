import { render } from '@testing-library/react';

import Dialog207 from './dialog207';

describe('Dialog207', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog207 />);
    expect(baseElement).toBeTruthy();
  });
});
