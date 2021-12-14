import { render } from '@testing-library/react';

import ImportantComponent77 from './important-component-77';

describe('ImportantComponent77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent77 />);
    expect(baseElement).toBeTruthy();
  });
});
