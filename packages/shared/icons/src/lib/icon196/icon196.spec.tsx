import { render } from '@testing-library/react';

import Icon196 from './icon196';

describe('Icon196', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon196 />);
    expect(baseElement).toBeTruthy();
  });
});
