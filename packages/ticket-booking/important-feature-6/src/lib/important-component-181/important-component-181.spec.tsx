import { render } from '@testing-library/react';

import ImportantComponent181 from './important-component-181';

describe('ImportantComponent181', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent181 />);
    expect(baseElement).toBeTruthy();
  });
});
