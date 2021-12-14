import { render } from '@testing-library/react';

import Icon181 from './icon181';

describe('Icon181', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon181 />);
    expect(baseElement).toBeTruthy();
  });
});
