import { render } from '@testing-library/react';

import ImportantComponent190 from './important-component-190';

describe('ImportantComponent190', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent190 />);
    expect(baseElement).toBeTruthy();
  });
});
