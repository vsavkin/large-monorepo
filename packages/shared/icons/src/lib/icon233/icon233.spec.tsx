import { render } from '@testing-library/react';

import Icon233 from './icon233';

describe('Icon233', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon233 />);
    expect(baseElement).toBeTruthy();
  });
});
