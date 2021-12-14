import { render } from '@testing-library/react';

import Icon5 from './icon5';

describe('Icon5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon5 />);
    expect(baseElement).toBeTruthy();
  });
});
