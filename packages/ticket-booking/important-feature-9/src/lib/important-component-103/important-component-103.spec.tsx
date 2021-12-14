import { render } from '@testing-library/react';

import ImportantComponent103 from './important-component-103';

describe('ImportantComponent103', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent103 />);
    expect(baseElement).toBeTruthy();
  });
});
