import { render } from '@testing-library/react';

import ImportantComponent211 from './important-component-211';

describe('ImportantComponent211', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent211 />);
    expect(baseElement).toBeTruthy();
  });
});
