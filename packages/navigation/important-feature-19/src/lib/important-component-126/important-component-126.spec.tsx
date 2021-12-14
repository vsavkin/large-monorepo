import { render } from '@testing-library/react';

import ImportantComponent126 from './important-component-126';

describe('ImportantComponent126', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent126 />);
    expect(baseElement).toBeTruthy();
  });
});
